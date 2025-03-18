import express from 'express';
import cors from 'cors'; //Enable Cross origin Resource Sharing
import morgan from 'morgan'; //Logging 
import movieRouter from './routes/movieRoute.js';


const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use("/api/movies/", movieRouter)

export default app;
