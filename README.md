# iDogs - Dog Adoption Platform 🐕

A full-stack web application for listing and adopting dogs with modern UI/UX and automatic deployment.

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- MongoDB Atlas
- Cloudinary account

### Installation

```bash
# Clone
git clone https://github.com/mrinmayray/iDogs.git
cd iDogs

# Backend setup
cd backend && cp .env.example .env && npm install

# Frontend setup
cd ../frontend && cp .env.example .env.local && npm install
```

### Environment Variables

**Backend (.env):**
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/PetAdoption
JWT_SECRET=your_secret_key_min_32_chars
PORT=5000
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

**Frontend (.env.local):**
```
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_preset
```

### Run Locally

**Terminal 1:**
```bash
cd backend && npm run dev
# Backend: http://localhost:5000
```

**Terminal 2:**
```bash
cd frontend && npm start
# Frontend: http://localhost:3000
```

## ✨ Features

✅ Modern Apple-inspired UI  
✅ Fully responsive (480px - 4K)  
✅ User authentication with JWT  
✅ Browse & list dogs for adoption  
✅ Cloudinary image uploads  
✅ Automatic testing & deployment  
✅ Security scanning  
✅ Environment-based configuration  

## 🔒 Security

- ✅ No hardcoded secrets
- ✅ Password hashing (bcryptjs)
- ✅ JWT authentication
- ✅ CORS protection
- ✅ Input validation
- ✅ Automated security audits

## 📚 Tech Stack

**Frontend:** React 18, React Router, Axios, Styled Components  
**Backend:** Node.js, Express, MongoDB, Mongoose  
**Authentication:** JWT + bcryptjs  
**Deployment:** Render, Netlify, Docker  
**CI/CD:** GitHub Actions  

## 🌐 Deployment

**Backend → Render:**
1. Connect GitHub repo
2. Add environment variables
3. Deploy (auto on push to main)

**Frontend → Netlify:**
1. Connect GitHub repo
2. Build: `npm run build`
3. Publish: `frontend/build`
4. Deploy (auto on push to main)

## 🤖 GitHub Actions

Automatic:
- ✅ Testing on every push
- ✅ Build verification
- ✅ Security scanning weekly
- ✅ Deployment on main merge

Setup: [GITHUB_ACTIONS_SETUP.md](./GITHUB_ACTIONS_SETUP.md)

## 📖 Documentation

- [Deployment Guide](./DEPLOYMENT.md)
- [GitHub Actions Setup](./GITHUB_ACTIONS_SETUP.md)

## 🔗 Live Demo

🌍 https://idogs.netlify.app/

## 📝 License

ISC

## 💬 Support

[Report an issue](https://github.com/mrinmayray/iDogs/issues)

---

**Made with ❤️ by the iDogs Team**
