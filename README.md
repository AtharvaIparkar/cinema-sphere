# 🎬 CinemaSphere

> A modern movie streaming platform built with React, Node.js, and MongoDB

CinemaSphere provides users with an immersive cinema experience. Browse, search, and discover movies with a sleek, responsive interface.

---

## ✨ Features

- 🔐 **Secure Authentication** - Clerk integration with Google OAuth
- 🎭 **Movie Discovery** - Browse and search extensive movie collections
- 📱 **Movie Details** - Comprehensive information with trailers and streaming
- 📚 **Watchlist Management** - Personal movie collections
- 🎨 **Responsive Design** - Works on all devices

---

## 🛠️ Tech Stack

**Frontend:** React 19, Vite, Tailwind CSS, React Router
**Backend:** Node.js, Express.js, MongoDB, Mongoose
**Auth:** Clerk Authentication
**APIs:** TMDB, OMDB

---

## 📁 Project Structure

```
Movies App/
├── client-vite/          # React frontend
├── server/               # Node.js backend
├── vercel.json          # Vercel deployment config
└── .env.production      # Environment template
```

---

## 🚀 Local Development

1. **Clone and install**
   ```bash
   git clone <repository-url>
   cd "Movies App"
   npm install
   cd client-vite && npm install && cd ..
   cd server && npm install && cd ..
   ```

2. **Environment setup**
   ```bash
   # Create .env in root with:
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
   MONGODB_URI=your_mongodb_uri
   TMDB_API_KEY=your_tmdb_key
   ```

3. **Start development**
   ```bash
   npm run dev
   ```
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:4000`

---

## 🌐 Vercel Deployment

### **Quick Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cinemasphere)

### **Manual Deployment**

1. **Connect Repository**
   - Link your GitHub repo to Vercel
   - Vercel will auto-detect the configuration

2. **Environment Variables**
   Set these in Vercel Dashboard → Settings → Environment Variables:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
   MONGODB_URI=mongodb+srv://...
   TMDB_API_KEY=your_api_key
   NODE_ENV=production
   ```

3. **Deploy**
   ```bash
   git push origin main
   ```
   Vercel will automatically build and deploy.

### **Deployment Configuration**

The project includes:
- `vercel.json` - Routes API calls to serverless functions
- `client-vite/public/_redirects` - SPA routing support
- Environment-aware API configuration

### **Build Process**
1. Frontend builds to `client-vite/dist/`
2. Backend becomes serverless functions
3. Static files served from CDN
4. API routes handled by Vercel Functions

### **Custom Domain**
1. Go to Vercel Dashboard → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk authentication key | ✅ |
| `MONGODB_URI` | MongoDB connection string | ✅ |
| `TMDB_API_KEY` | The Movie Database API key | ✅ |
| `NODE_ENV` | Environment (production/development) | ✅ |

---

## 🎯 Usage

1. **Browse Movies** - Explore the homepage collection
2. **Search & Filter** - Find movies by title, genre, or source
3. **Sign In** - Access full features with Clerk authentication
4. **Watch Movies** - Stream content with multiple server options
5. **Manage Watchlist** - Save favorites for later

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/name`)
5. Open Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ for movie enthusiasts

</div>