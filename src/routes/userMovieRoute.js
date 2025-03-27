import express from "express";
import {createUserMovie, getMoviesByUserId, updateMovieRatingByUserAndMovieeId} from "../controllers/userMovieController.js";



const userMoviewRouter = express.Router();

//movieRouter.get('/', getUserMovie); //List of the Movies

userMoviewRouter.get('/getMovieByUserId/:userId', getMoviesByUserId); //Get Movies by User Id

userMoviewRouter.post('/createUserMovie', createUserMovie); //CREATE New User Movie

userMoviewRouter.put('/updateMovieRatingByUserAndMovieeId/:userId/:movieId', 
    updateMovieRatingByUserAndMovieeId);

export default userMoviewRouter;