# Housewarming E-Invite · புதுமனை புகுவிழா அழைப்பிதழ்

Mr. R.P Selvakumar & Mrs. Sujitha Selvakumar — Friday, 30 October 2026,
New Bypass Road, Vinayaga Nagar, Sevoor.

A bilingual (English / தமிழ்) animated housewarming invitation website. The whole
site is two files in `dist/`: `index.html` (styles, artwork, animation and all
images inline) and `music.mp3` (the family's chosen song). No build step; the
only external request is Google Fonts.

## Features

- **Door intro** — a thoranam-decked front door that swings open on tap, with a
  jasmine-and-marigold petal shower; the family's song (`dist/music.mp3`) fades in
  on that tap, loops, and can be toggled with the ♪ button.
- **EN / தமிழ் toggle** — every string is written independently per language in the
  `T` dictionary (traditional invitation Tamil, not translated English).
- **Light the five lamps** — an interactive kuthuvilakku ritual; each flame is a blessing.
- **Blessing card** — Thirukkural 81 (விருந்தோம்பல்) with a "what it means" overlay.
- **Hero** — Sri Vinayagar Thunai, a family photo (all four) in a gold arch frame, and the hosts' names.
- **Event details** — the family-at-the-door illustration from the printed card, a
  Friday · 30 · October date ribbon, a timeline (dawn muhurtham → Sathya Narayana
  Pooja), a venue panel with **Get directions** (the card's "Scan for location"
  link) and **Copy address**, plus special-invites and tap-to-call contact tiles.
- Live **countdown** to the muhurtham.
- Kolam-dot wallpaper, thoranam on every card and interactive brass kuthuvilakku
  drawn as inline SVG; Sri Vinayagar emblem, family scene, family photo, temple
  elephant, peacock and lotus artwork embedded as base64 images.

## Customize

All real details live at the top of the `<script>` in `dist/index.html`:

1. **`CONFIG`** — hosts' names, family/children names, address + landmark, date,
   muhurtham and pooja times, contact numbers, the Google-Maps link, the
   countdown start and the music file name. To change the song, replace
   `dist/music.mp3` (keep the name) or point `CONFIG.music` at another file.
2. **`T`** — every visible sentence, in `en` and `ta`. Edit freely; the Tamil is
   written as invitation Tamil, so keep that tone when you change names/dates.
3. **Colours** — the Rani Pink & Parrot Green palette is a set of CSS variables in the
   `:root{…}` block at the top of the `<style>`; change those few values to recolour the
   whole site (door intro, cards, buttons, timeline, countdown).

## Preview locally

```bash
node serve.js
```

Then open <http://localhost:8931>.

## Live site

**https://vijay-00.github.io/selvakumar-sujitha-housewarming/** — served by GitHub
Pages from the `gh-pages` branch, which holds just the contents of `dist/`.

To publish changes after editing `dist/`:

```bash
git add -A && git commit -m "Update invite"
```

```bash
git push origin main && git subtree push --prefix dist origin gh-pages
```

GitHub rebuilds the site within a minute or two.

## Other hosts

Any static host works — upload the whole `dist` folder (both `index.html` and
`music.mp3`; without the mp3 the page still works, just silently). Free options:

- **Netlify Drop** — drag the `dist` folder onto <https://app.netlify.com/drop>.
- **GitHub Pages** — push the repo, enable Pages on the `dist` folder (or copy
  both files to the repo root and serve from there).
- **Cloudflare Pages / Vercel** — point at the repo, output directory `dist`.

## Image credits

The family-at-the-door scene and the Sri Vinayagar emblem come from the family's
own printed invitation card; the family photo is their own. The decorated temple
elephant (countdown), peacock (closing card) and gold lotus (blessing card) illustrations
are from [Pixabay](https://pixabay.com) (Pixabay Content License — free for
commercial use, no attribution required). All images are embedded as base64 in
`index.html`. The thoranam, kuthuvilakku lamps and kolam are hand-drawn inline SVG.
The background song was supplied by the family.
