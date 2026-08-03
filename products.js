/* ==============================================================
   SITE CONFIG
   Edit these three lines to make the site yours.
   ============================================================== */
const SITE_CONFIG = {
  name: "STACK",
  tagline: "Software, shipped straight from the source.",
  contactEmail: "hello@example.com",
};

/* ==============================================================
   PRODUCTS
   This array is your entire catalog. To add something new, copy
   one block below, edit the fields, and save — no build step,
   no database. Push the file to GitHub and the live site updates.

   FIELD GUIDE
   -------------------------------------------------------------
   id            unique slug, letters/numbers/dashes only
   name          product name shown on the card
   category      "original"  your own closed-source software
                 "fork"      a free fork/build of someone else's project
   version       shown next to the category badge, e.g. "1.4.0"
                 (optional — omit the field to hide it)
   license       short badge text, e.g. "PROPRIETARY", "MIT", "GPL-3.0"
   description   one or two sentences, shown on the card
   price         a number in the currency below. Use 0 for free items.
   currency      ISO currency code, e.g. "USD", "EUR", "GBP"
   icon          1–2 characters shown as the card's monogram
   action        "buy"       shows a "Buy" button, needs `link`
                 "download"  shows a "Get it free" button, needs `link`
   link          where the button goes:
                   - for "buy": paste a per-product checkout URL from
                     your payment provider (Stripe Payment Link,
                     Gumroad, Lemon Squeezy, PayPal.me — any hosted
                     checkout works, since this page can't process
                     payments itself)
                   - for "download": wherever the file, installer,
                     or repository release lives
   ============================================================== */
const PRODUCTS = [
  {
    id: "focus-timer",
    name: "Focus Timer",
    category: "original",
    version: "2.1",
    license: "PROPRIETARY",
    description: "A distraction-blocking Pomodoro timer with app-level lockouts and a weekly focus report.",
    price: 14,
    currency: "USD",
    icon: "FT",
    action: "buy",
    link: "https://buy.stripe.com/replace-with-your-payment-link"
  },
  {
    id: "ledger-lite",
    name: "Ledger Lite",
    category: "original",
    version: "1.6",
    license: "PROPRIETARY",
    description: "Single-file bookkeeping for freelancers. Plain-text ledger, no cloud account, no subscription.",
    price: 22,
    currency: "USD",
    icon: "LL",
    action: "buy",
    link: "https://buy.stripe.com/replace-with-your-payment-link"
  },
  {
    id: "quickcrop",
    name: "QuickCrop",
    category: "original",
    version: "1.0",
    license: "FREE",
    description: "A one-window batch image cropper and resizer. Free while it's in early testing.",
    price: 0,
    currency: "USD",
    icon: "QC",
    action: "download",
    link: "https://github.com/your-username/quickcrop/releases"
  },
  {
    id: "notewell",
    name: "Notewell",
    category: "fork",
    version: "3.2.1",
    license: "MIT",
    description: "A maintained fork of a notes app that lost its upstream. Same core, patched dependencies.",
    price: 0,
    currency: "USD",
    icon: "NW",
    action: "download",
    link: "https://github.com/your-username/notewell"
  },
  {
    id: "openplayer",
    name: "OpenPlayer",
    category: "fork",
    version: "0.9.4",
    license: "GPL-3.0",
    description: "A gapless-playback fork of an abandoned media player, rebuilt for current systems.",
    price: 0,
    currency: "USD",
    icon: "OP",
    action: "download",
    link: "https://github.com/your-username/openplayer"
  },
  {
    id: "routine",
    name: "Routine",
    category: "original",
    version: "1.2",
    license: "PROPRIETARY",
    description: "A menu-bar habit tracker. Log a streak in one click, see it break in red.",
    price: 9,
    currency: "USD",
    icon: "RT",
    action: "buy",
    link: "https://buy.stripe.com/replace-with-your-payment-link"
  }
];window.SITE_CONFIG = SITE_CONFIG;
window.PRODUCTS = PRODUCTS;
