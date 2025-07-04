console.log("🚀 Server is starting...");

import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import './db.js'

dotenv.config()

const app=express()

const PORT=process.env.PORT||3000

app.use(express.json())

import userRoutes from './routes/userRoutes.js';
import candidateRoutes from './routes/candidateRoutes.js';

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});