# TAGÉ — boutique avec paiement Stripe

## Structure du projet
```
tage-shop/
├── public/
│   ├── index.html        → le site (catalogue, panier)
│   └── success.html       → page affichée après un paiement réussi
├── api/
│   ├── create-checkout-session.js   → crée la session de paiement Stripe
│   ├── session-status.js            → vérifie une commande après paiement
│   └── webhook.js                   → confirmation fiable côté serveur (à activer plus tard)
├── package.json
└── .env.example
```

## Mise en ligne (avec Vercel — gratuit pour démarrer)

### 1. Créer le compte Stripe
1. Allez sur https://dashboard.stripe.com/register et créez le compte avec votre SIRET.
2. Dans le Dashboard, laissez-le en **mode Test** pour l'instant (bouton en haut à droite).
3. Allez dans **Développeurs → Clés API** et copiez la **clé secrète** (`sk_test_...`).

### 2. Installer les outils (une seule fois)
```bash
npm install -g vercel
```

### 3. Déployer
Depuis le dossier `tage-shop` :
```bash
npm install
vercel login
vercel
```
Répondez aux questions (nom du projet, dossier par défaut). Vercel vous donne une URL du type `tage-shop.vercel.app`.

### 4. Ajouter la clé Stripe en variable d'environnement
```bash
vercel env add STRIPE_SECRET_KEY
```
Collez votre `sk_test_...`, sélectionnez "Production" et "Preview". Puis relancez :
```bash
vercel --prod
```

### 5. Tester
Ouvrez votre site, ajoutez un produit au panier, cliquez sur "Payer en toute sécurité".
Sur la page Stripe, utilisez une carte de test :
- Numéro : `4242 4242 4242 4242`
- Date : n'importe quelle date future
- CVC : n'importe quel 3 chiffres

Vous devez arriver sur la page de confirmation avec le montant et une référence de commande.

### 6. Passer en argent réel
1. Dans le Dashboard Stripe, complétez l'activation du compte (infos entreprise, IBAN Wise pour recevoir les fonds).
2. Basculez en **mode Live**, copiez la nouvelle clé secrète (`sk_live_...`).
3. Remplacez la variable d'environnement :
   ```bash
   vercel env rm STRIPE_SECRET_KEY
   vercel env add STRIPE_SECRET_KEY
   vercel --prod
   ```

### 7. (Recommandé) Activer le webhook
Le webhook confirme les paiements de façon fiable côté serveur (indépendamment du navigateur du client) — utile dès que vous commencez à traiter des commandes pour de vrai.
1. Dashboard Stripe → **Développeurs → Webhooks → Ajouter un endpoint**
2. URL : `https://votre-domaine.com/api/webhook`
3. Événement à écouter : `checkout.session.completed`
4. Copiez le "Signing secret" (`whsec_...`) et ajoutez-le :
   ```bash
   vercel env add STRIPE_WEBHOOK_SECRET
   ```

## Nom de domaine
Une fois que vous avez acheté un nom de domaine (OVH, Gandi, Namecheap...), ajoutez-le dans Vercel : **Project → Settings → Domains**, puis suivez les instructions pour pointer le domaine vers Vercel.

## Modifier le catalogue
Les produits doivent être mis à jour à **deux endroits** (c'est voulu, pour la sécurité) :
- `public/index.html` → variable `PRODUCTS` (ce que les visiteurs voient)
- `api/create-checkout-session.js` → variable `PRODUCTS` (les prix réellement facturés)

Si les deux ne correspondent pas, c'est le prix du fichier `api/` qui fait foi lors du paiement.
