# Kingpin: Shack to Penthouse — v0.2.1

Single-file HTML5 3D game. Portrait and landscape. Installs to the home screen and works offline.

## Files (all in the same folder)
index.html · sw.js · manifest.webmanifest · icon-192.png · icon-512.png · icon-maskable-512.png · apple-touch-icon.png

## Hosting next to Echo Garden (GitHub Pages)
Recommended: its own repo called `Kingpin` → https://only1smee.github.io/Kingpin/
1. github.com → + → New repository → name `Kingpin` → Public → Create.
2. Tap "uploading an existing file" → pick every file in this folder → Commit changes.
3. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save. Live in 1–2 minutes.
4. Open the link on your phone → browser menu → Add to Home screen.

Alternative: a `kingpin/` folder inside the Echo-Garden repo → https://only1smee.github.io/Echo-Garden/kingpin/

Saves are separate from Echo Garden (different save key), so both games sit side by side safely.

## Releasing an update
Upload the new index.html, and bump VERSION at the top of sw.js (e.g. kingpin-v0.2.2).
Players get an "Update ready · tap to restart" bar.
