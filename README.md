# STACK — a static software catalog for GitHub Pages

A single-page, no-build storefront for selling your own software and
listing free forks of other projects. Plain HTML, CSS, and JavaScript —
nothing to compile, no framework, no server. That's what makes it work
on GitHub Pages, which only ever serves static files.

## File structure

```
index.html        the page itself
css/style.css      all design tokens and styles (colors, fonts, layout)
js/products.js     ← you edit this file to manage your catalog
js/app.js          renders the catalog from products.js (no editing needed)
```

## Adding a product

Open `js/products.js`. Every product is one object in the `PRODUCTS`
array. Copy an existing block, change the fields, save, commit, push —
the live site updates automatically the next time GitHub Pages rebuilds
(usually under a minute).

```js
{
  id: "my-app",
  name: "My App",
  category: "original",     // "original" (your software) or "fork" (free fork)
  version: "1.0",           // optional — omit to hide it
  license: "PROPRIETARY",   // or "MIT", "GPL-3.0", "FREE", etc.
  description: "One or two sentences about what it does.",
  price: 19,                 // 0 for free items
  currency: "USD",
  icon: "MA",                // 1–2 letters for the card's monogram
  action: "buy",             // "buy" or "download"
  link: "https://buy.stripe.com/your-link"
}
```

The full field guide is written as comments directly above the array in
`products.js`, so you shouldn't need to come back here once you've added
your first product.

Change the shop's name, tagline, and contact email at the top of the
same file, in `SITE_CONFIG`.

## About payments — read this before you launch

GitHub Pages can only serve files. It cannot run a server, so this page
has no way to charge a card, verify a payment, or store an order
itself. That's normal for a static site — the fix is to hand the actual
charge off to a payment provider that gives you a **hosted checkout
link per product**, and put that link in the product's `link` field.
A few that work well for indie software:

- **Stripe Payment Links** — create one per product in your Stripe
  dashboard (no code). Handles cards, receipts, and can attach a
  license key or file via a redirect/email if you set that up.
- **Gumroad** or **Lemon Squeezy** — built specifically for selling
  digital goods; they host the checkout *and* deliver the file after
  payment, so you don't need your own download hosting either.
- **PayPal.me** — simplest option, but doesn't deliver files
  automatically; pair it with a manual email or a note in your
  confirmation email telling the buyer where to download.

For free forks, set `action: "download"` and point `link` at wherever
the file or repository actually lives (a GitHub Releases page works
well).

Never put card numbers, API keys, or secrets anywhere in this repo —
everything here is public the moment it's pushed.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push these files to it (the
   `index.html` should sit at the repository root, or in `/docs` if
   you'd rather keep it there).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a
   branch," pick your branch, and the root folder you used above.
4. Save. GitHub gives you a URL like
   `https://your-username.github.io/your-repo/` within a minute or two.
5. Optional: add a custom domain under the same Pages settings.

## Customizing the look

Every color, font, spacing value, and radius lives at the top of
`css/style.css` under `:root`. Changing those few lines re-themes the
whole site without touching the layout rules below them.
