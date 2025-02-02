# Spotify API Report

## 1. Introduction

The API we created allows users to search for music by directly integrating with the Spotify API, one of the most comprehensive music databases available. Users can search through playlists, artists, albums, and genres. This API provides structured endpoints for user authentication, music retrieval, and playlist management.

## 2. Database Design

The API utilizes a well-structured database model with the following core entities:

- **User**: Represents registered users and manages authentication.
- **Song**: Stores metadata about each song.
- **Album**: Represents a collection of songs associated with an artist.
- **Artist**: Stores details about musicians and bands.
- **Genre**: Categorizes songs into different musical styles.
- **Playlist**: Allows users to curate and manage personal playlists.

Each entity is defined in the `model` directory using Mongoose schemas, indicating that MongoDB is the primary database solution. The database structure ensures efficient query execution and data retrieval.

## 3. API Endpoints

The API provides a comprehensive set of endpoints, categorized by functionality:

### **User Management**

- `POST /users/register` - Register a new user.
- `POST /users/login` - Authenticate a user and return a JWT token.
- `GET /users/profile` - Retrieve user profile details.
- `PUT /users/update` - Update user information.

### **Songs**

- `GET /songs` - Retrieve all available songs.
- `GET /songs/:id` - Retrieve a specific song by its ID.
- `POST /songs` - Add a new song to the database.
- `PUT /songs/:id` - Update song details.
- `DELETE /songs/:id` - Remove a song from the database.

### **Albums**

- `GET /albums` - Retrieve all albums and their associated songs.
- `GET /albums/:id` - Retrieve details of a specific album.
- `POST /albums` - Create a new album entry.
- `PUT /albums/:id` - Update album details.
- `DELETE /albums/:id` - Remove an album from the database.

### **Artists**

- `GET /artists` - Retrieve all artists.
- `GET /artists/:id` - Retrieve details of a specific artist.
- `POST /artists` - Add a new artist.
- `PUT /artists/:id` - Update artist information.
- `DELETE /artists/:id` - Remove an artist from the database.

### **Playlists**

- `GET /playlists` - Retrieve all user playlists.
- `GET /playlists/:id` - Retrieve details of a specific playlist.
- `POST /playlists` - Create a new playlist.
- `PUT /playlists/:id` - Update playlist information.
- `DELETE /playlists/:id` - Remove a playlist.

### **Genres**

- `GET /genres` - Retrieve all available genres.
- `GET /genres/:id` - Retrieve details of a specific genre.
- `POST /genres` - Add a new genre.
- `PUT /genres/:id` - Update genre details.
- `DELETE /genres/:id` - Remove a genre from the database.

## 4. Technology Stack

The Spotify API is built with modern web technologies to ensure efficiency and scalability:

- **Node.js** - JavaScript runtime for backend execution.
- **Express.js** - Lightweight web framework for handling API requests.
- **MongoDB** - NoSQL database optimized for handling music data.
- **Mongoose** - ODM (Object-Document Mapping) for managing MongoDB interactions.
- **JWT (JSON Web Token)** - Secure authentication mechanism for user sessions.
- **Axios** - HTTP client for making requests to external APIs.
- **Bcrypt** - Hashing library for password encryption.

## 5. Implementation Details

The API follows the **MVC (Model-View-Controller) architecture**, ensuring a well-organized and maintainable codebase:

- **Models**: Defined in the `model` directory using Mongoose schemas.
- **Controllers**: Located in the `controllers` directory, handling API logic and business rules.
- **Routes**: Configured in `routes/route.js`, mapping HTTP requests to controllers.
- **Middleware**: Handles authentication, validation, and error handling.
- **Environment Variables**: Managed using `.env` files to store sensitive information like database URIs and API keys.

## 6. Dependencies

The following dependencies are essential for the API’s functionality:

| Package      | Version | Link                                              |
| ------------ | ------- | ------------------------------------------------- |
| axios        | ^1.7.9  | [npm](https://www.npmjs.com/package/axios)        |
| bcrypt       | ^5.1.1  | [npm](https://www.npmjs.com/package/bcrypt)       |
| body-parser  | ^1.20.3 | [npm](https://www.npmjs.com/package/body-parser)  |
| cors         | ^2.8.5  | [npm](https://www.npmjs.com/package/cors)         |
| dotenv       | ^16.4.7 | [npm](https://www.npmjs.com/package/dotenv)       |
| express      | ^4.21.2 | [npm](https://www.npmjs.com/package/express)      |
| jsonwebtoken | ^9.0.2  | [npm](https://www.npmjs.com/package/jsonwebtoken) |
| mysql2       | ^3.12.0 | [npm](https://www.npmjs.com/package/mysql2)       |
| mongoose     | ^7.0.0  | [npm](https://www.npmjs.com/package/mongoose)     |

## 7. Security Measures

To ensure a secure API, the following security measures are implemented:

- **JWT Authentication** - All protected routes require a valid JWT token.
- **Password Hashing** - User passwords are encrypted using Bcrypt before being stored.
- **CORS Policy** - Configured to prevent unauthorized cross-origin access.
- **Environment Variables** - API keys and database credentials are stored securely.
- **Input Validation** - Middleware ensures data integrity before processing user input.

## 8. Testing

To ensure reliability and performance, the API is tested using the following methods:

- **Manual Testing (Postman)** - Manually verify each endpoint’s functionality.
- **Unit Testing (Jest/Mocha)** - Automated tests for controllers and services.
- **Integration Testing** - Validate data flow between database, controllers, and responses.
- **Authentication Tests** - Ensure JWT handling and role-based access control work as expected.
- **Error Handling Tests** - Check how the API handles invalid inputs and exceptions.

By following a structured testing methodology, we ensure that the API is robust, secure, and efficient.

