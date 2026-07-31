# Deployment Guide

## Prerequisites

- GitHub repository with all code pushed
- MongoDB Atlas account
- Cloudinary account
- Render/Heroku account (or hosting of your choice)

## Step 1: Prepare Environment Variables

Make sure you have all the required environment variables:

### Backend Variables
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/PetAdoption
JWT_SECRET=your_strong_secret_key_min_32_chars
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://yourdomain.com
```

### Frontend Variables
```
REACT_APP_API_BASE_URL=https://your-backend-url.com
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_preset_name
```

## Step 2: Deploy Backend (Render.com)

1. Go to [render.com](https://render.com)
2. Sign up/Login
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Fill in the following:
   - **Name**: `idogs-backend`
   - **Environment**: Node
   - **Build Command**: `npm i`
   - **Start Command**: `npm start`
   - **Region**: Choose closest to your users
6. Add Environment Variables:
   - Click "Add Environment Variable" for each:
     - `MONGO_URI`
     - `JWT_SECRET`
     - `NODE_ENV=production`
     - `CORS_ORIGIN=https://your-frontend-url`
7. Click "Create Web Service"
8. Wait for deployment (5-10 minutes)
9. Copy your backend URL (e.g., `https://idogs-backend.onrender.com`)

## Step 3: Deploy Frontend (Netlify)

### Option A: Using Netlify UI

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`
6. Add environment variables:
   - Go to Site settings → Build & deploy → Environment
   - Add:
     - `REACT_APP_API_BASE_URL=https://your-backend-url.com`
     - `REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name`
     - `REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_preset_name`
7. Trigger deploy (or push to main branch)
8. Your frontend is live!

### Option B: Using Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import GitHub project
3. Configure root directory to `frontend`
4. Add environment variables
5. Deploy

## Step 4: Update Backend CORS

After frontend deployment, update your backend CORS_ORIGIN:

1. Go to Render dashboard
2. Select your backend service
3. Go to Environment
4. Update `CORS_ORIGIN` to your Netlify/Vercel URL
5. Auto-redeploy should trigger

## Step 5: Verify Deployment

1. Visit your frontend URL
2. Try signing up with a test account
3. Check if you can add and view dogs
4. Check browser console for any errors
5. Check backend logs for any issues

## Troubleshooting

### Frontend shows blank page
- Check if backend URL is correct in environment variables
- Check browser console for errors
- Make sure CORS is configured correctly on backend

### Can't login/signup
- Check if backend is running
- Verify MongoDB connection
- Check environment variables on backend
- Check network tab in developer tools

### Images won't upload
- Verify Cloudinary credentials
- Check upload preset is public
- Ensure CORS is enabled on Cloudinary

### Database connection fails
- Verify MongoDB URI is correct
- Check MongoDB Atlas IP whitelist (allow all for simplicity, or add deployment server IP)
- Ensure database exists

## Performance Optimization

1. Enable gzip compression on backend
2. Use CDN for static assets
3. Implement lazy loading for images
4. Optimize database indexes
5. Use caching strategies

## Security Checklist

- ✅ Never commit `.env` files
- ✅ Use strong JWT_SECRET (32+ characters)
- ✅ Enable HTTPS everywhere
- ✅ Restrict CORS to your domain only
- ✅ Use MongoDB IP whitelist
- ✅ Regularly update dependencies
- ✅ Monitor logs for suspicious activity
- ✅ Use environment variables for all secrets

## Continuous Deployment

Both Render and Netlify support auto-deployment:
- Any push to `main` branch auto-deploys
- Set up branch-specific deployments for staging
- Use GitHub Actions for custom CI/CD workflows

## Support

For issues:
1. Check Render/Netlify build logs
2. Check application logs
3. Verify all environment variables
4. Test API endpoints with Postman
5. Check GitHub Issues
