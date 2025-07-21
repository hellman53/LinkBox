# 🔗 LinkBox – A Simple Bookmark Manager (React + Tailwind) Browser Extension

LinkBox is a lightweight and responsive React-based web app that lets users save, copy, and manage URLs easily in their browser. It uses `localStorage` for data persistence and includes Chrome Extension support to save the current active tab.

---

## 🚀 Features

- Save links manually or via current tab (for extensions)
- Copy links to clipboard
- Delete individual or all links
- Persistent `localStorage` storage
- Minimal responsive UI (Tailwind CSS)

---

## 🛠️ Getting Started

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/LinkBox.git
cd LinkBox
```

2. Install Node Modules
Make sure you have Node.js installed.

Then install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

💻 Run the Project in Development
To run the React app locally:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
This will start the app on http://localhost:5173 by default (if you're using Vite).

📦 Build for Production
To generate a production build (for deployment or Chrome extension packaging):
```bash
npm run build
# or
yarn build
# or
pnpm build
```
This will generate a dist/ folder containing the build output.

🧩 Load as Chrome/Brave Extension
To load the extension in Chrome or Brave, follow these steps:
1. Go to chrome://extensions/ (or brave://extensions/ for Brave).
2. Enable Developer Mode.
3. Click "Load unpacked".
4. Select the dist/ folder.
5. The extension should now be loaded and visible in the browser.
6. You can also load the extension directly from the `manifest.json` file by clicking the "Load unpacked" button and selecting the `manifest.json` file.
7. To update the extension, simply reload the extension by clicking the reload button in the extensions pag
8. To remove the extension, click the "Remove" button in the extensions page.
9. To load the extension in a different browser, follow the same steps as above.

📁 Folder Structure
The project follows a standard structure:
``` bash
src/
  ├── components/
  │   └── LinkBox.jsx
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

📌 Notes
1. chrome.tabs API only works when run inside an actual extension
2. Links are saved using the browser’s localStorage and are persistent across sessions
