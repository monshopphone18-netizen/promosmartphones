// api/session-status.js
// Utilisée par success.html pour afficher un récap fiable (montant, email)
// après le retour de paiement, en interrogeant directement Stripe
// (jamais en se fiant à des paramètres d'URL modifiables par le visiteur).

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { session_id } = req.query;
  if (!session_id) {
    return res.status(400).json({ error: 'session_id manquant' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items'],
    });

    res.status(200).json({
      status: session.payment_status, // 'paid' si le paiement a réussi
      email: session.customer_details ? session.customer_details.email : null,
      amount_total: session.amount_total, // en centimes
      currency: session.currency,
      order_ref: session.id.slice(-10).toUpperCase(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Impossible de récupérer la commande' });
  }
};
