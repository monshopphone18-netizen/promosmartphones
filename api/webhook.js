// api/webhook.js
//
// Stripe appelle cette URL directement (pas le navigateur du client) pour
// confirmer qu'un paiement a réussi. C'est la source d'information fiable :
// contrairement au navigateur, elle ne peut pas être manipulée par le client.
//
// À configurer plus tard, une fois le site en ligne :
// 1. Dashboard Stripe → Développeurs → Webhooks → Ajouter un endpoint
// 2. URL : https://votre-site.com/api/webhook
// 3. Événement à écouter : checkout.session.completed
// 4. Copier le "Signing secret" fourni et le mettre dans la variable
//    d'environnement STRIPE_WEBHOOK_SECRET

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Vercel : nécessaire pour vérifier la signature Stripe sur le corps brut
module.exports.config = { api: { bodyParser: false } };

function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on('data', (chunk) => chunks.push(chunk));
    readable.on('end', () => resolve(Buffer.concat(chunks)));
    readable.on('error', reject);
  });
}

module.exports = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const rawBody = await buffer(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Signature webhook invalide :', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // TODO : ici, brancher ce que vous voulez déclencher une fois le
    // paiement confirmé, par exemple :
    // - enregistrer la commande dans une base de données
    // - envoyer un e-mail de confirmation au client
    // - notifier votre équipe (Slack, email...)
    console.log('Paiement confirmé pour la session', session.id, session.customer_details?.email);
  }

  res.status(200).json({ received: true });
};
