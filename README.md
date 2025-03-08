# movieDb
Movie Review API

A simple RESTful API for managing movie reviews.

**Installation**

Clone the repository:

git clone <repository_url>
cd <project_directory>

**Install dependencies:**

npm install

Run the server:

npm start

**API Endpoints**

GET /movies → Get all movie reviews.

GET /movie/:id → Get a single movie review.

POST /movies → Add a new movie review.

PUT /movie/:id → Update a movie rating.

DELETE /movie/:id → Delete a movie review.

**Example Request/Response**

**POST /movies**

{
  "title": "The Dark Knight",
  "rating": 10
}

**Response:**

{
  "message": "Movie review added!",
  "data": { "id": 3, "title": "The Dark Knight", "rating": 10 }
}

**Tech Stack**

Node.js

Express.js
