# FYP Portfolio — Autonomous Medicine Delivery Robot
**P2222 | Air University, Islamabad | BE Mechatronics Engineering 2022–2026**

> Sana Raouf · Arslan Rizwan · Aakasha Amjad  
> Supervisor: Dr. Umair Aziz

---

## Project Structure

```
fyp-portfolio/
├── public/
│   ├── index.html      ← Main portfolio website (all assets embedded)
│   └── demo.mp4        ← ⚠️ Add your video file here (see below)
├── server.js           ← Express server with video streaming support
├── package.json
├── railway.toml        ← Railway deployment config
├── .gitignore
└── README.md
```

---

## Step 1 — Add Your Demo Video

Before deploying, place your robot demo video inside the `public/` folder and name it exactly:

```
public/demo.mp4
```

Supported formats: `.mp4` (recommended), `.webm`  
If your file is `.mov` or another format, convert it first using a free tool like [HandBrake](https://handbrake.fr/) or [CloudConvert](https://cloudconvert.com/mov-to-mp4).

> **Note:** If your video is very large (>100MB), GitHub may reject it. In that case, see the "Large Video" section below.

---

## Step 2 — Upload to GitHub

### First time setup:

1. Go to [github.com](https://github.com) → click **New repository**
2. Name it `fyp-portfolio` → set to **Public** → click **Create repository**
3. On your computer, open a terminal in the `fyp-portfolio/` folder and run:

```bash
git init
git add .
git commit -m "Initial FYP portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fyp-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### To update the site later (e.g. swap photos, add video):

```bash
git add .
git commit -m "Updated photos / video"
git push
```

Railway will automatically redeploy within ~1 minute.

---

## Step 3 — Deploy on Railway (Free)

1. Go to [railway.app](https://railway.app) → **Sign up with GitHub**
2. Click **New Project** → **Deploy from GitHub repo**
3. Select your `fyp-portfolio` repository
4. Railway auto-detects Node.js, installs dependencies, and starts the server
5. Go to **Settings → Networking → Generate Domain** to get your free public URL

Your site will be live at something like: `fyp-portfolio.up.railway.app`

---

## Updating Photos Later

All photos are embedded as base64 inside `index.html`. To swap a photo:

1. Open `index.html` in a text editor (VS Code recommended)
2. Search for the person's name (e.g. `alt="Sana Raouf"`)
3. Find the `src="data:image/png;base64,..."` on that `<img>` tag
4. Replace the entire base64 string with your new image's base64
   - To get base64: use [base64.guru](https://base64.guru/converter/encode/image) or run `base64 -i photo.jpg` in terminal

---

## Large Video Files (>100MB)

GitHub blocks files over 100MB. Options:

**Option A — Git LFS (recommended):**
```bash
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git add public/demo.mp4
git commit -m "Add demo video via LFS"
git push
```

**Option B — Host video externally:**
Upload to YouTube/Google Drive/Cloudinary and update the `<source src="...">` in `index.html` to point to that URL instead of `demo.mp4`.
