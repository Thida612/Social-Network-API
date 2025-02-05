# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## User Story 
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Description

This project is a social network API built using Node.js, Express.js, and MongoDB. It allows users to create accounts, post thoughts, react to thoughts, and add friends.


## Installation

1. Clone the repository:
   
   git clone https://github.com/your-username/social-network-api.git
   

2. Navigate to the project directory:
   
   cd social-network-api
   

3. Install the dependencies:
   
   npm install


4. Create a `.env` file in the root directory and add your MongoDB URI and port:
   
   MONGODB_URI='mongodb://127.0.0.1:27017/socialDB'
   PORT=3001
   

5. Start the server:
   
   npm start
   

## Usage

Use Insomnia to test the API routes.



### User Routes

- `GET /api/users` - Get all users
- `GET /api/users/:userId` - Get a single user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:userId` - Update a user by ID
- `DELETE /api/users/:userId` - Delete a user by ID
- `POST /api/users/:userId/friends/:friendId` - Add a friend
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend

### Thought Routes

- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:thoughtId` - Get a single thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:thoughtId` - Update a thought by ID
- `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought



### User

- `username` (String, unique, required, trimmed)
- `email` (String, required, unique, must match a valid email format)
- `thoughts` (Array of `_id` values referencing the `Thought` model)
- `friends` (Array of `_id` values referencing the `User` model)

### Thought

- `thoughtText` (String, required, between 1 and 280 characters)
- `createdAt` (Date, default value is the current timestamp)
- `username` (String, required)
- `reactions` (Array of nested documents created with the `reactionSchema`)

### Reaction (Schema only)

- `reactionId` (ObjectId, default value is a new ObjectId)
- `reactionBody` (String, required, 280 character maximum)
- `username` (String, required)
- `createdAt` (Date, default value is the current timestamp)

## License

This project is licensed under the MIT License.

## Demo
https://drive.google.com/file/d/1napudHzGuuHfzLI6RELTw3_QBXsg9B6L/view?usp=sharing


