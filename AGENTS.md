# Guidelines for Task Manager Backend
## Technology Stack
- Node.js with Express.js
- MongoDB with Mongoose ODM
## Coding Standards
- Use async/await for all database operations.
- Implement proper error handling with custom middleware.
- Follow RESTful API design principles.
## Project Structure
- Controllers: `src/controllers`
- Models: `src/models`
- Routes: `src/routes`
- Middleware: `src/middleware`
## Best Practices
- Keep routes thin, move logic to controllers.
- Ensure all API responses follow a consistent JSON format.