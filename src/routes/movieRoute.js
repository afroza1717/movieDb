import express from "express";
import { createMovie, getMovie, getMovieById, updateMovie } from "../controllers/movieController.js";
import { deleteSpecificMovie } from "../controllers/movieController.js";


const movieRouter = express.Router();

movieRouter.get('/', getMovie); //List of the Movies

movieRouter.get('/:id', getMovieById); //Get Specific Movie by Id

movieRouter.post('/', createMovie); //CREATE New Movies

movieRouter.put('/:id', updateMovie);

movieRouter.delete('/:id', deleteSpecificMovie);

export default movieRouter;