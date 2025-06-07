# 🧠 Accessibility Analyzer

A full-stack web application that allows users to enter any website URL and receive an accessibility report generated using **Lighthouse** and **axe-core**. The results are stored in MongoDB and visualized in a responsive React frontend.

---

## 🚀 Features

- 🌐 URL input form to scan websites
- 🔍 Scans using:
  - **Lighthouse** (for performance/accessibility score)
  - **axe-core** (for detailed accessibility violations)
- 🧾 Results saved in MongoDB
- 📊 Accessible results viewer (Lighthouse score + axe violations)
- 📤 Export or copy scan results as JSON
- 🔄 Rescan or clear results
- ✨ Clean UI built with React + TailwindCSS

---

## 🛠️ Tech Stack

### Frontend
- React (with JSX)
- TailwindCSS
- Axios

### Backend
- Node.js
- Express.js
- Puppeteer (for headless browser automation)
- Lighthouse
- axe-core

### Database
- MongoDB (via Mongoose)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/simi-9112/accessibility-analyzer.git
cd accessibility-analyzer
