import mongoose from "mongoose";

//define schema
//


const movieSchema = new mongoose.Schema({
    movie_id: {
        type: String,
        unique: true,
    },

    movieName: {
        type: String,
    },
    rating: {
        type: Number
    },
    movie_type: {
        type: String
    }
})

//Define or create collections
const movie = mongoose.model("Movie", movieSchema);

export default movie;