# www.debrugsevaart.com

**Concept design**, unsolicited, for Golfclub Oostburg – Domein De Brugse Vaart. This is not the club's official website.
Preview: https://jamesleondufour.github.io/debrugsevaart-concept/

One-page website in Dutch, English and French.
Plain HTML, CSS and JavaScript: no build step, it runs on any web server (including the existing IIS host).

If the club adopts it, remove the two concept-only items in `index.html` (both are marked with comments): the `noindex` robots meta tag and the `concept-badge` paragraph. Also point `og:url` / `og:image` back to the club's domain.

```
index.html            page structure + Dutch text
assets/css/style.css  all styling
assets/js/i18n.js     English and French text (+ a few Dutch strings built in JS)
assets/js/main.js     scorecard data, menu, gallery, map, language switch
assets/img/           logo, photos, favicon
```

## Preview locally

```bash
python -m http.server 8765
```

Then open http://localhost:8765. Add `?lang=en` or `?lang=fr` to force a language.

## Editing text

- Dutch: edit the text directly in `index.html`.
- English / French: edit the matching key in `assets/js/i18n.js` (each translated element in `index.html` has a `data-i18n="key"`).
- Green fees, scorecard metres, par and stroke index: `index.html` (prices) and the `TEES` / `PAR` / `SI` arrays in `assets/js/main.js`.

## Photos

The current photos (`bg_01`–`bg_03`, `logo.png`) come from the club's existing server and are all clubhouse interiors.
The site would benefit most from a few high-resolution **course photos** (fairways, water, an island green, the clubhouse façade, the terrace).
Drop them into `assets/img/` and swap the `src` of the hero or gallery images.

## Going live and fixing HTTPS

Current state (checked 7 Oct 2026):

| Address | Status |
|---|---|
| `http://www.debrugsevaart.com` | Works, but it is a CNAME to `www.golfoostburg.com` and serves that site's placeholder page |
| `https://www.debrugsevaart.com` | Certificate error: the Let's Encrypt certificate only covers `golfoostburg.com` and `www.golfoostburg.com` |
| `debrugsevaart.com` (no www) | Does not resolve: there is no A record |

To fix it:

1. **DNS** (nameservers `ns1/ns2.cloudblaster.be`): add an A record for `debrugsevaart.com` → `178.208.37.150`, or point both names to wherever this site will be hosted.
2. **Hosting**: on the IIS server, create a site for this folder with bindings for `debrugsevaart.com` and `www.debrugsevaart.com` (HTTP and HTTPS).
   Because `www.debrugsevaart.com` currently shares the golfoostburg.com site, uploading `index.html` there would also replace the golfoostburg.com homepage. Use a separate IIS site, or decide to do that on purpose.
3. **Certificate**: issue a certificate that includes `debrugsevaart.com` and `www.debrugsevaart.com`, for example with win-acme on the IIS server, and bind it with SNI.
4. **Redirects**: only after step 3, redirect HTTP → HTTPS and `debrugsevaart.com` → `www.debrugsevaart.com` (IIS URL Rewrite).

## Facts to double-check before launch

These came from third-party listings and public pages, so confirm them with the club:

- Green fees €52 (Mon–Fri) / €62 (weekends and holidays), maximum handicap 36, soft spikes required
- Scorecard metres and course rating 73.8 / slope 139 (yellow tees)
- Review figures: Google 4.4 (233 reviews), Facebook 98% recommend (52 reviews)
- Events capacity of 25–300 guests
- Instagram: the old site linked `instagram.com/golfoostburg`, but that profile is not available, so it was left out. Add the correct handle to the social links if there is one.
