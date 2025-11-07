# 🗄️ User Backup System

A mini Node.js + MongoDB project that automatically takes database backups every 5 minutes using **GitHub Actions**.

## 🚀 How to use

1. Fork or clone this repo.
2. Go to GitHub → Settings → Secrets → Actions → New repository secret  
   - **Name:** `MONGO_URI`  
   - **Value:** Your MongoDB Atlas connection string
3. Commit and push your code.
4. Go to the **Actions** tab → Watch “MongoDB Auto Backup” workflow run every 5 minutes.
5. After completion, check “Artifacts” section → download your latest backup ZIP.

## 📦 Local Testing

To test locally:

```bash
npm install
echo "MONGO_URI=your_connection_string" > .env
npm start
