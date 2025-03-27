import UserMovie from "../models/userMovie.js";



export const createUserMovie = async (req, res) => {
    try {
    const newUserMovie = new UserMovie(req.body);
    console.log(newUserMovie);
    //DOCS: https://mongoosejs.com/docs/api/document.html#Document.prototype.save()
    const savedUserMovie = await newUserMovie.save();
    res.status(201).json(savedUserMovie);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating user movie", error: error.message });
  }

    res.status(201).json({
        message: 'UserMovie Created Successfully.',
        data: savedUserMovie
    })
}


/**
 * Getting Movie List by User
 * @param {*} req 
 * @param {*} res 
 */
export const getMoviesByUserId = async (req, res) => {
    try {
        const { userId } = req.params; 
        console.log("User ID", userId);
        //DOCS: https://mongoosejs.com/docs/api/query.html#Query.prototype.find()
        const movie = await UserMovie.find({ user_id: userId });
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export const updateMovieRatingByUserAndMovieeId = async (req, res) => {
  try {
    //DOCS: https://mongoosejs.com/docs/api/model.html#Model.findOne()
    
    const { userId, movieId } = req.params; 

    console.log("userId", userId);
    console.log("movieId", movieId);

    const { rating } = req.body;
    console.log("rating", rating);

    
    //const movie = await UserMovie.find({ user_id: userId, movie_id: movieId });


     // Find and update the document
     const updatedMovie = await UserMovie.findOneAndUpdate(
      { user_id: userId, movie_id: movieId }, // Find movie
      { $set: { rating: rating } }, // Update rating
      { new: true } // Return updated document
    );

    console.log("Updated Movie:", updatedMovie);

    if (!updatedMovie) {
      return res.status(404).json({ message: "You're not allowed to see/set the rating" });
    } 
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};