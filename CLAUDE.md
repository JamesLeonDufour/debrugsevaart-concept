# CLAUDE.md

## What this is

An **unsolicited concept website** for Golfclub Oostburg – Domein De Brugse Vaart (18-hole golf course in Oostburg, NL, near Bruges).
James is **not affiliated with the club**. He wanted to play there, found no usable website, and is pitching this site to them.
Treat it as a sales demo until the club says yes.

Static site: `index.html` + `assets/` (CSS, vanilla JS, images). No build step, no dependencies.
`README.md` covers editing, deployment and the domain/HTTPS diagnosis. Read it before touching hosting topics.

## Status (as of 2026-10-07)

Done:
- Site built and checked at 375 / 620 / 1100 / 1190 / 1440 px in NL, EN and FR: no horizontal overflow, no console errors. The menu, scorecard, lightbox and map consent were all tested.
- Local git repo on `main` with the initial commit. **No remote yet.**
- Concept safeguards in place (see below).

Pending, in order:
1. **Create the GitHub repo and turn on Pages.** Target: public repo `jamesleondufour/debrugsevaart-concept`, Pages from `main` / root.
   Expected URL: https://jamesleondufour.github.io/debrugsevaart-concept/ (already hard-coded in `og:url`/`og:image` and in the README and pitch email; update all three if the name changes).
   The `gh` CLI is **not installed**. Git Credential Manager is, so `git push` over HTTPS authenticates on its own. Options:
   - `winget install GitHub.cli`, then `gh auth login`, `gh repo create jamesleondufour/debrugsevaart-concept --public --source . --push`, then
     `gh api -X POST repos/jamesleondufour/debrugsevaart-concept/pages -f "source[branch]=main" -f "source[path]=/"`
   - Or James creates the empty repo on github.com, then `git remote add origin https://github.com/JamesLeonDufour/debrugsevaart-concept.git && git push -u origin main`, and enables Pages under Settings → Pages.
2. Open the live URL and check that it loads, including the images and the language switch.
3. Send the pitch email. The draft is in `PITCH-EMAIL.md` (gitignored, so it stays local). James may want a Dutch or French version, since the club is Dutch-speaking. It has **not** been sent or saved to Gmail yet.

If the club adopts the site, see "Going live" in the README. Also remove the concept-only items listed below.

## Concept-only items (remove if the club adopts the site)

- `<meta name="robots" content="noindex, nofollow">` in `index.html`
- `<p class="concept-badge">` in `index.html`, plus its CSS block and the `concept` key in `i18n.js`
- `og:url` / `og:image` point to the GitHub Pages URL; switch them back to `https://www.debrugsevaart.com/...`

Keep these while it's a demo: they stop golfers from mistaking it for the official site or landing on it from Google with unconfirmed prices.

## How the code works

**i18n**: Dutch is the source language and lives inline in `index.html`.
- `data-i18n="key"` replaces the element's innerHTML, so HTML like `<em>` and `<sup>` is allowed.
- `data-i18n-attr="aria-label:key;alt:key2"` sets attributes.
- `assets/js/i18n.js` reads the Dutch text from the DOM at load. `dict.en` / `dict.fr` hold the translations.
- Strings built only in JS (scorecard labels, WhatsApp text, page title, locale) need an entry in `dict.nl` as well.
- Language order: `?lang=` → localStorage `dbv-lang` → browser language → `nl`.
- After any text change, run `node scripts/check-i18n.js` (it fails if a key is missing in EN or FR).

**Scorecard**: hole data is the `TEES` / `PAR` / `SI` arrays in `assets/js/main.js`. The totals (7002 / 6135 / 5975 / 5679 m, par 73) were cross-checked against the source. Tee switching updates the existing elements so the length bars animate. A language change rebuilds the scorecard.

**WhatsApp**: every `[data-wa]` link gets a greeting in the visitor's language (`wa.text`). Number: +31 6 15 17 21 21.

**Map**: Google Maps loads only after the visitor clicks "Kaart laden", for privacy (GDPR).

**Design**: the tokens are at the top of `style.css`.
- Colours: deep green `--green-900 #13251c`, cream `#f5f0e5`, gold `#c2a46d`, and `--gold-ink #7d6230` for gold text on cream (AA contrast).
- Fonts: Cormorant Garamond (headings, via Google Fonts) and Jost (body).
- Section backgrounds alternate: cream / dark green / cream / leather (clubhouse) / cream / green (reviews) / cream.
- Gotchas already fixed, don't undo them:
  - Cormorant's old-style "1" looks like a Roman "I", so numbers use `font-variant-numeric: lining-nums`.
  - The header's `backdrop-filter` traps the fixed mobile menu inside the header, so it's switched off while the menu is open.
  - The hamburger breakpoint is **1180px** because the NL/FR nav overflows at 1100px. Nav gaps tighten below 1320px.

## Content rules

- **Don't invent facts.** Everything on the page comes from one of these sources:
  - the club's current placeholder page (history text, contacts)
  - golfingrecord.com (scorecard)
  - 1golf.eu / golfbreaks (green fees, facilities, handicap 36, island greens)
  - eventplanner.net (events, 25–300 guests)
  - Google Maps (4.4 ★ from 233 reviews, review themes, coordinates 51.324248, 3.463131)
  - Facebook (98% recommend, 52 reviews)

  I removed claims I couldn't back up, such as a course view from the meeting rooms or golf beginner sessions. Ask James before adding new claims.
- **Facts to confirm with the club** are listed at the bottom of the README.
- **Photos:** only use the club's own images, which currently come from their server (`bg_01`–`03` are interiors, plus `logo.png`). Don't copy Google Maps photos: they belong to the visitors who took them. Facebook full-size images need a login. The biggest improvement would be real course and exterior photos from the club.
- The Instagram profile `golfoostburg` is unavailable, so it's left out of the social links.
- Reviews show only totals and themes. Don't quote named reviewers.

## Working here

- Preview: `python -m http.server 8765`, then open http://localhost:8765 (add `?lang=en` or `?lang=fr`).
- Git identity: JamesLeonDufour <jamesleondufour@gmail.com>. Commit only when asked.
- The folder is on Google Drive (`I:\My Drive\Script\...`). Git works fine here, but avoid editing the same files on two machines at once.
