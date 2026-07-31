require('dotenv').config();
const ConnectToMongo = require('./db');
const adoptRoutes = require("./routes/adoptRoutes")
const express = require('express')
var cors = require('cors')

ConnectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}))
app.use(express.json())

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

//Available Routes
app.use('/api/auth', require('./routes/auth'), adoptRoutes)

app.listen(port, () => {
  console.log(`iDogs Backend app listening on port ${port}`)
})
