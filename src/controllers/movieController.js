import Movie from "../models/movie.js";

/**
 * Getting Movie List
 * @param {*} req 
 * @param {*} res 
 */
export const getMovie = async (req, res) => {
    try {
      //DOCS: https://mongoosejs.com/docs/api/query.html#Query.prototype.find()
      const movie = await Movie.find();
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };

//   // Get Task by ID
// export const getTaskById = async (req, res) => {
//     try {
//       //DOCS: https://mongoosejs.com/docs/api/model.html#Model.findOne()
//       const task = await Task.findOne({ movie_id: req.params.movie_id });
//       if (!task) {
//         return res.status(404).json({ message: "Task not found" });
//       }
//       res.status(200).json(task);
//     } catch (error) {
//       res.status(500).json({ message: "Internal Server Error", error: error.message });
//     }
//   };

/**
 * Getting movie by Id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getMovieById = async (req, res) => {
    console.log("req.params", req.params.id);
   
    try {
        //DOCS: https://mongoosejs.com/docs/api/model.html#Model.findOne()
        const movie = await Movie.findOne({ movie_id: req.params.movie_id });
        if (!movie) {
          return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(movie);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
      }

}


/**
 * Creating New Movie
 * @param {*} req 
 * @param {*} res 
 */

export const createMovie = async (req, res) => {
    try {
    const newMovie = new Movie(req.body);
    if (!newMovie.movieName) {
        return res.status(400).json({
            message: 'Movie Title is Required'
        })
    }

    if (!newMovie.rating) {
        return res.status(400).json({
            message: 'Movie Rating is Required'
        })
    }

    //DOCS: https://mongoosejs.com/docs/api/document.html#Document.prototype.save()
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating movie", error: error.message });
  }

    res.status(201).json({
        message: 'Movie Created Successfully.',
        data: newMovie
    })
}


/**
 * Updating the Movie Accordingly with the request
 * @param {*} req 
 * @param {*} res 
 */

export const updateMovie = async (req, res) => {
    console.log("req.params", req.params);

    try {
      //DOCS https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
      const updatedMovie = await Task.findOneAndUpdate(
        { movie_id: req.params.movie_id },
        req.body,
        {
          new: true, //return the modified document rather than the original
        }
      );
      if (!updatedMovie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(updatedMovie);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating task", error: error.message });
    }

}



  

//Delete Movie
export const deleteSpecificMovie = async (req, res) => {
    console.log("req.params", req.params);
    try {
        //DOCS https://mongoosejs.com/docs/api/model.html#Model.findOneAndDelete()
        const deletedMovie = await Movie.findOneAndDelete({
            movie_id: req.params.movie_id,
        });
        if (!deletedMovie) {
          return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ message: "Movie deleted successfully" });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error deleting movie", error: error.message });
      }

}