import express from "express";
import { createMovie, getMovie, getMovieById, updateMovie } from "../controllers/movieController.js";
import { deleteSpecificMovie } from "../controllers/movieController.js";
import { AuthGuard } from "../middleware/authMiddleware.js";


const movieRouter = express.Router();

movieRouter.get('/', AuthGuard, getMovie); //List of the Movies

movieRouter.get('/:id', AuthGuard,getMovieById); //Get Specific Movie by Id

movieRouter.post('/', AuthGuard, createMovie); //CREATE New Movies

movieRouter.put('/:id', AuthGuard, updateMovie);

movieRouter.delete('/:id', AuthGuard, deleteSpecificMovie);

export default movieRouter;