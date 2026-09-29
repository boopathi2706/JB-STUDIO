# JB — Freelance Development & Design Studio

> **“Your Idea. Our Code. Your Growth.”**

JB is a student-led freelance technology studio founded by **JEEVANANTHAM** and **BOOPATHI**. We build websites, cross-platform mobile apps, and creative poster graphics tailored for students, creators, and growing businesses.

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS (v4)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Animations:** Custom CSS smooth transitions & keyframe glowing glows

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

---

## ⚙️ Configuration & Customization (`src/data/siteData.js`)

All website data, team details, services, contact information, project links, and poster images are centralized in a single configuration file:

📁 **`src/data/siteData.js`**

### Where to Replace Information:

1. **WhatsApp & Email:**
   Update `contact.whatsapp`, `contact.whatsappRaw`, and `contact.email` in `siteData.js` or set them in `.env`.
2. **Social Links:**
   Update `contact.github` and `contact.linkedin`.
3. **Team Members & Images:**
   Update `team` array names, roles, bios, and image URLs.
4. **Project Links & Images:**
   Update `projects` array (`liveDemoUrl`, `caseStudyUrl`, `image`).
5. **Poster Collection:**
   Update `posters` array with custom filenames or URLs (`/assets/posters/poster-01.jpg`).
6. **Logo:**
   The text-based logo component can be configured or replaced in `src/components/Logo.jsx`.

---

## 🌐 Vercel Deployment Instructions

1. Push your code to a GitHub/GitLab repository.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Vite**
5. Root Directory: `./`
6. Click **Deploy**.

---

## 🔒 Environment Variables (`.env.example`)

Copy `.env.example` to `.env` if you wish to configure contact defaults via environment variables:

```env
VITE_WHATSAPP_NUMBER=+91XXXXXXXXXX
VITE_STUDIO_EMAIL=hello@jb-studio.example
VITE_GITHUB_URL=https://github.com/jb-studio
VITE_LINKEDIN_URL=https://linkedin.com/company/jb-studio
```
