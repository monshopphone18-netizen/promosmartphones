// api/create-checkout-session.js
//
// Fonction serverless (Vercel) qui crée une session de paiement Stripe.
// C'est ICI, et uniquement ici, que la clé secrète Stripe est utilisée —
// jamais dans le code du site visible par les visiteurs.

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Catalogue "source de vérité" côté serveur.
// IMPORTANT : on ne fait JAMAIS confiance aux prix envoyés par le navigateur.
// Le client envoie seulement des ID + quantités, le serveur recalcule les prix
// à partir de cette liste. Ça évite qu'un visiteur malintentionné modifie
// le prix dans le code du site pour payer moins cher.
const PRODUCTS = {
  1:  { name: 'iPhone 12 · 64 Go',                price: 329  },
  2:  { name: 'iPhone 13 · 128 Go',               price: 419  },
  3:  { name: 'iPhone 14 · 128 Go',               price: 519  },
  4:  { name: 'iPhone 15 · 256 Go',               price: 799  },
  5:  { name: 'Galaxy A54 · 128 Go',              price: 249  },
  6:  { name: 'Galaxy S22 · 128 Go',               price: 389  },
  7:  { name: 'Galaxy S23 · 256 Go',               price: 549  },
  8:  { name: 'Galaxy Z Flip 4 · 256 Go',          price: 459  },
  9:  { name: 'Galaxy Tab S8 · 128 Go',            price: 379  },
  10: { name: 'MacBook Air M1 · 256 Go',           price: 749  },
  11: { name: 'MacBook Air M2 · 256 Go',           price: 999  },
  12: { name: 'MacBook Pro M1 · 512 Go',           price: 1099 },
  13: { name: 'Mac Mini M2 · 256 Go',              price: 499  },
  14: { name: 'iMac 24" M1 · 256 Go',              price: 899  },
  15: { name: 'iPhone 13 · 256 Go',               price: 479  },
  16: { name: 'iPhone 13 · 512 Go',               price: 599  },
  17: { name: 'iPhone 13 Pro Max · 128 Go',       price: 509  },
  18: { name: 'iPhone 13 Pro Max · 256 Go',       price: 569  },
  19: { name: 'iPhone 15 Pro · 128 Go',            price: 749  },
  20: { name: 'iPhone 15 Pro · 256 Go',            price: 839  },
  21: { name: 'iPhone 15 Pro · 512 Go',            price: 989  },
  22: { name: 'iPhone 15 Pro · 1 To',              price: 1149 },
  23: { name: 'iPhone 15 Pro Max · 256 Go',        price: 859  },
  24: { name: 'iPhone 15 Pro Max · 512 Go',        price: 999  },
  25: { name: 'iPhone 15 Pro Max · 1 To',          price: 1179 },
  26: { name: 'iPhone 16 · 128 Go',                price: 569  },
  27: { name: 'iPhone 16 · 256 Go',                price: 649  },
  28: { name: 'iPhone 16 · 512 Go',                price: 799  },
  29: { name: 'iPhone 16 Pro Max · 256 Go',        price: 929  },
  30: { name: 'iPhone 16 Pro Max · 512 Go',        price: 1069 },
  31: { name: 'iPhone 16 Pro Max · 1 To',          price: 1219 },
  32: { name: 'iPhone 17 · 256 Go',                price: 669  },
  34: { name: 'iPhone 12 · 128 Go',                price: 369  },
  35: { name: 'iPhone 12 · 256 Go',                price: 429  },
  36: { name: 'iPhone 14 · 256 Go',                price: 579  },
  37: { name: 'iPhone 14 · 512 Go',                price: 699  },
  33: { name: 'iPhone 17 · 512 Go',                price: 849  },
  38: { name: 'iPhone 17 Pro · 256 Go',             price: 869  },
  39: { name: 'iPhone 17 Pro · 512 Go',             price: 1019 },
  40: { name: 'iPhone 17 Pro · 1 To',               price: 1179 },
};

module.exports = async (req, res) => {
  // CORS basique (utile si le front est servi depuis un domaine différent de l'API)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { items } = req.body; // items = [{ id: 4, qty: 1 }, ...]

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Panier vide' });
    }

    const line_items = items.map(({ id, qty }) => {
      const product = PRODUCTS[id];
      if (!product) throw new Error('Produit inconnu : ' + id);
      if (!Number.isInteger(qty) || qty < 1 || qty > 10) {
        throw new Error('Quantité invalide pour le produit ' + id);
      }
      return {
        price_data: {
          currency: 'eur',
          product_data: { name: product.name },
          unit_amount: Math.round(product.price * 100), // Stripe attend des centimes
        },
        quantity: qty,
      };
    });

    const origin = req.headers.origin || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH', 'LU', 'DE', 'ES', 'IT', 'PT', 'NL'],
      },
      phone_number_collection: { enabled: true },
      success_url: `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/index.html`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Erreur serveur' });
  }
};
