const movieList = [{
    id: 1,
    movieName: 'Walking in the cloud',
    rating: 3,
    type: "Classic"
},
{
    id: 2,
    movieName: 'Cast away',
    rating: 5,
    type: "Adventure"
}
];

/**
 * Getting Movie List
 * @param {*} req 
 * @param {*} res 
 */
export const getMovie = (req, res) => {
    res.json(movieList);
}

/**
 * Getting movie by Id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getMovieById = (req, res) => {
    console.log("req.params", req.params.id);
    const movieIdFromReq = parseInt(req.params.id);

    const specificMovie = movieList.find(movie => movieIdFromReq === movie.id);

    //If movie doesn't exist with that Id
    if (!specificMovie) {
        return res.status(404).json({
            message: 'No movie found with id:' + movieIdFromReq
        })
    }

    //Returning the matched movie with that specific id 
    return res.status(200).json({
        data: specificMovie
    })

}

/**
 * Creating New Movie
 * @param {*} req 
 * @param {*} res 
 */

export const createMovie = (req, res) => {
    const newMovie = req.body;
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

    movieList.push(newMovie);

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

    const movieId = parseInt(req.params.id);
    //Request Payload
    const { movieReq } = req.body;//Short object property Access

    console.log("req.body", req.body.movieReq);

    //Finding the movie with Id 
    let updatedMovieResult = movieList.find(updatedMovieResult => movieId === updatedMovieResult.id);
    updatedMovieResult = { ...updatedMovieResult, movieReq };

    // if we dont have movie from movieList
    if (!updatedMovieResult) {
        return res.status(404).json({
            message: 'No Movie Found'
        })
    }

    //Send Correct Movie Details
    return res.status(200).json({
        data: updatedMovieResult
    })

}

//Delete Movie
export const deleteSpecificMovie = (req, res) => {
    console.log("req.params", req.params);
    const movieId = parseInt(req.params.id);

    //Request Payload
    console.log("movieId", movieId);

    //Finding index of the movie to delete
    let resultMovie = movieList.findIndex(movieResult => movieId === movieResult.id);

    // if we dont have movie with that id
    if (resultMovie === -1) {
        return res.status(404).json({
            message: 'No Movie Found'
        })
    }

    //Delete Movie from Specific Index
    movieList.splice(resultMovie, 1);


    //Delete Specific Movie
    return res.status(200).json({
        message: "Movie Delete Successfully"
    })

}