// cart.js — panier, tiroir, galerie zoom et paiement partagés entre index.html et produit.html

let cart = loadCart();

function cartEntries(){
  return Object.entries(cart).map(([id,val]) => ({p: PRODUCTS.find(x=>x.id==id), qty: val.qty, color: val.color}))
    .filter(e => e.p);
}

function addToCart(id, color){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  if(!color && Array.isArray(p.colors) && p.colors.length>0) color = p.colors[0].name;
  if(cart[id]){ cart[id].qty += 1; cart[id].color = color; }
  else { cart[id] = {qty:1, color:color||null}; }
  saveCart(cart);
  const btn = document.getElementById('add-'+id);
  if(btn){
    const prev = btn.textContent;
    btn.textContent = 'Ajouté ✓';
    btn.classList.add('added');
    setTimeout(()=>{
      btn.textContent = btn.dataset.label || prev;
      btn.classList.remove('added');
    }, 900);
  }
  updateCartUI();
  openCart();
}

function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  saveCart(cart);
  updateCartUI();
}
function removeFromCart(id){ delete cart[id]; saveCart(cart); updateCartUI(); }

function updateCartUI(){
  const entries = cartEntries();
  const count = entries.reduce((s,e)=>s+e.qty,0);
  const total = entries.reduce((s,e)=>s+e.qty*e.p.price,0);
  const set = (id,val)=>{ const el=document.getElementById(id); if(el) el.textContent=val; };
  set('cartCount', count);
  set('itemCount', count);
  set('cartTotal', total + ' €');
  const cgv = document.getElementById('cgvAccept');
  const cgvOk = !cgv || cgv.checked;
  const cb = document.getElementById('checkoutBtn'); if(cb) cb.disabled = count===0 || !cgvOk;
  const err = document.getElementById('checkoutError'); if(err) err.style.display = 'none';

  const body = document.getElementById('drawerBody');
  if(!body) return;
  if(entries.length===0){
    body.innerHTML = '<div class="drawer-empty">Votre panier est vide.<br>Ajoutez un produit du catalogue.</div>';
    return;
  }
  body.innerHTML = entries.map(e => {
    const c = (Array.isArray(e.p.colors)&&e.p.colors.length) ? (e.p.colors.find(x=>x.name===e.color)||e.p.colors[0]) : null;
    const thumb = (c && c.photo)
      ? `<img src="${c.photo}" alt="" style="width:100%;height:100%;object-fit:contain;">`
      : illustrationFor(e.p, 32);
    return `
    <div class="cart-item">
      <div class="ci-ill">${thumb}</div>
      <div class="ci-info">
        <div class="ci-name">${e.p.name}</div>
        <div class="ci-spec">${e.p.spec}${e.color ? ' · '+e.color : ''}</div>
        <div class="qty">
          <button onclick="changeQty(${e.p.id},-1)">−</button>
          <span>${e.qty}</span>
          <button onclick="changeQty(${e.p.id},1)">+</button>
        </div>
        <button class="ci-remove" onclick="removeFromCart(${e.p.id})">Retirer</button>
      </div>
      <div class="ci-price mono">${e.p.price*e.qty} €</div>
    </div>`;
  }).join('');
}

function openCart(){
  const d=document.getElementById('drawer'), o=document.getElementById('overlay');
  if(d) d.classList.add('open'); if(o) o.classList.add('open');
}
function closeCart(){
  const d=document.getElementById('drawer'), o=document.getElementById('overlay');
  if(d) d.classList.remove('open'); if(o) o.classList.remove('open');
}

// ---------- Galerie zoom (lightbox) ----------
let lbViews = [];
let lbIndex = 0;

function viewsFor(p, colorName){
  if(Array.isArray(p.colors) && p.colors.length){
    const c = p.colors.find(c=>c.name===colorName) || p.colors[0];
    return (Array.isArray(c.views) && c.views.length>0) ? c.views : (c.photo ? [c.photo] : []);
  }
  return [];
}

function openLightbox(id, colorName){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  lbViews = viewsFor(p, colorName);
  if(lbViews.length===0) return;
  lbIndex = 0;
  const t=document.getElementById('lbTitle'); if(t) t.textContent = p.name + (colorName ? ' · ' + colorName : '');
  const s=document.getElementById('lbSub'); if(s) s.textContent = p.spec;
  lbRender();
  const lb=document.getElementById('lightbox'); if(lb) lb.classList.add('open');
}
function lbRender(){
  const img=document.getElementById('lbImg'); if(img) img.src = lbViews[lbIndex];
  const prev=document.getElementById('lbPrev'), next=document.getElementById('lbNext');
  if(prev) prev.disabled = lbViews.length<2;
  if(next) next.disabled = lbViews.length<2;
  const th=document.getElementById('lbThumbs');
  if(th) th.innerHTML = lbViews.length>1
    ? lbViews.map((v,i)=>`<button type="button" class="lb-thumb ${i===lbIndex?'active':''}" onclick="lbGo(${i})"><img src="${v}" alt=""></button>`).join('')
    : '';
}
function lbStep(d){ lbIndex = (lbIndex + d + lbViews.length) % lbViews.length; lbRender(); }
function lbGo(i){ lbIndex = i; lbRender(); }
function closeLightbox(){ const lb=document.getElementById('lightbox'); if(lb) lb.classList.remove('open'); }

document.addEventListener('DOMContentLoaded', ()=>{
  const lb = document.getElementById('lightbox');
  if(lb) lb.addEventListener('click', e=>{ if(e.target.id === 'lightbox') closeLightbox(); });
  updateCartUI();
});
document.addEventListener('keydown', e=>{
  const lb = document.getElementById('lightbox');
  if(!lb || !lb.classList.contains('open')) return;
  if(e.key==='Escape') closeLightbox();
  if(e.key==='ArrowLeft') lbStep(-1);
  if(e.key==='ArrowRight') lbStep(1);
});

// ---------- Paiement réel via Stripe Checkout ----------
async function goToStripeCheckout(){
  const entries = cartEntries();
  if(entries.length===0) return;
  const cgv = document.getElementById('cgvAccept');
  if(cgv && !cgv.checked){
    const errorBox = document.getElementById('checkoutError');
    if(errorBox){ errorBox.textContent = 'Merci d\'accepter les CGV pour continuer.'; errorBox.style.display = 'block'; }
    return;
  }
  const btn = document.getElementById('checkoutBtn');
  const label = document.getElementById('checkoutLabel');
  const spinner = document.getElementById('checkoutSpinner');
  const errorBox = document.getElementById('checkoutError');
  btn.disabled = true;
  label.textContent = 'Redirection vers le paiement…';
  spinner.style.display = 'inline-block';
  errorBox.style.display = 'none';
  try {
    const items = entries.map(e => ({ id: e.p.id, qty: e.qty }));
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    const data = await res.json();
    if(!res.ok || !data.url){ throw new Error(data.error || 'Impossible de démarrer le paiement.'); }
    window.location.href = data.url;
  } catch (err) {
    errorBox.textContent = err.message;
    errorBox.style.display = 'block';
    btn.disabled = false;
    label.textContent = 'Payer en toute sécurité';
    spinner.style.display = 'none';
  }
}
