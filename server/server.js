import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'; // We need this module to work with file paths
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import forumRoutes from './routes/forumRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import chatbotRoutes from './routes/chatbotRoutes.js';

dotenv.config({ path: './server/.env' });

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// All our API routes will be available under /api
app.use('/api/users', userRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/chatbot', chatbotRoutes);

// --- THIS IS THE NEW PRODUCTION CODE ---
const __dirname = path.resolve(); // This gets the current directory path
if (process.env.NODE_ENV === 'production') {
  // We tell Express to serve the built React app from the 'client/build' folder
  app.use(express.static(path.join(__dirname, '/client/build')));

  // For any route that is not an API route, we send the main index.html file
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}
// ------------------------------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));