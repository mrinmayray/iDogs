# iDogs - Dog Adoption Platform

A full-stack web application for listing and adopting dogs. Users can create accounts, browse available dogs for adoption, and add their own dogs for adoption.

## Features

- User authentication (Sign up & Login)
- Browse available dogs for adoption
- Add dogs for adoption
- User profiles
- Image upload via Cloudinary
- Responsive design

## Tech Stack

### Frontend
- React 18
- React Router v6
- Axios for HTTP requests
- Styled Components for styling
- React Toastify for notifications

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Bcryptjs for password hashing
- CORS for cross-origin requests

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account
- npm or yarn

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/mrinmayray/iDogs.git
cd iDogs
```

### 2. Setup Backend

```bash
cd backend
cp .env.example .env
```

Update `.env` with your values:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/PetAdoption?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

Install dependencies:

```bash
npm install
```

### 3. Setup Frontend

```bash
cd ../frontend
cp .env.example .env.local
```

Update `.env.local` with your values:

```
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

**Terminal 1 - Start Backend:**

```bash
cd backend
npm run dev
```

Backend runs on `http://localhost:5000`

**Terminal 2 - Start Frontend:**

```bash
cd frontend
npm start
```

Frontend runs on `http://localhost:3000`

### Using Docker

```bash
docker-compose up
```

Access the application at `http://localhost:3000`

## Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_super_secret_key` |
| `PORT` | Backend server port | `5000` |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:3000` |
| `NODE_ENV` | Environment type | `development` |

### Frontend (.env.local)

| Variable | Description | Example |
|----------|-------------|----------|
| `REACT_APP_API_BASE_URL` | Backend API URL | `http://localhost:5000` |
| `REACT_APP_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `REACT_APP_CLOUDINARY_UPLOAD_PRESET` | Cloudinary upload preset | `your_preset` |

## API Endpoints

### Authentication
- `POST /api/auth/createuser` - Create new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/getuser` - Get user details (requires auth)

### Adoption
- `POST /api/adopt/register` - Add dog for adoption
- `GET /api/adopt/allusers` - Get all available dogs

## Deployment

### Deploy to Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set environment variables in Render dashboard
5. Deploy

### Deploy to Heroku

```bash
heroku create your-app-name
heroku config:set MONGO_URI=your_mongo_uri
heroku config:set JWT_SECRET=your_jwt_secret
git push heroku main
```

## Security Best Practices

- ✅ Environment variables for sensitive data
- ✅ Password hashing with bcryptjs
- ✅ JWT-based authentication
- ✅ CORS configured
- ✅ Input validation with express-validator
- ✅ Error handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

ISC

## Support

For issues and feature requests, please create an issue on GitHub.

## Live Demo

🔗 [iDogs - Dog Adoption Platform](https://idogs.netlify.app/)
