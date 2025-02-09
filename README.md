# Humble Superhero API

Welcome to the **Humble Superhero API** project! This is a simple application designed to allow users to add superheroes with their names, superpowers, and humility scores, and fetch a list of superheroes sorted by their humility scores.

## Project Overview

At our company, we believe that everyone is a superhero in their own way. This application celebrates that by allowing users to create and view a list of humble superheroes, each with a humility score.

### Key Features

- **Add Superheroes:** Users can add a new superhero with their name, superpower, and a humility score.
- **View Superheroes List:** Users can fetch a list of superheroes, which is sorted in descending order of their humility score.
- **Real-time Updates:** After adding a superhero, the list automatically refreshes to show the newly added superhero without requiring a page refresh.

## Technologies Used

### Backend
- **NestJS:** A framework for building efficient, scalable Node.js server-side applications.
- **In-memory Database:** Superheroes data is stored in-memory (using an array) for simplicity.

### Frontend (Optional)
- **React:** A JavaScript library for building user interfaces.
- **Vite:** A build tool that provides fast development and optimized production builds for modern JavaScript applications.

## Installation & Setup

### Backend (NestJS)

1. Clone the repository:
   ```bash
   git clone https://github.com/gautam1103/humble-superhero-api.git
   cd humble-superhero-api


2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run start
   ```
   The server will be running at [http://localhost:3000](http://localhost:3000).

### Frontend (React + Vite)

1. Navigate to the `humble-superhero-frontend` folder:
   ```bash
   cd humble-superhero-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm run dev
   ```
   The frontend will be running at [http://localhost:5173](http://localhost:5173).

## Usage

### Backend Endpoints

- **POST /superheroes**: Add a new superhero.
    - Request body:
      ```json
      {
        "name": "Superman",
        "superpower": "Flight",
        "humilityScore": 8
      }
      ```
    - Example:
      ```bash
      curl -X POST http://localhost:3000/superheroes -H "Content-Type: application/json" -d '{"name": "Superman", "superpower": "Flight", "humilityScore": 8}'
      ```

- **GET /superheroes**: Fetch the list of superheroes, ordered by humility score in descending order.
    - Example:
      ```bash
      curl http://localhost:3000/superheroes
      ```

### Frontend Interface

1. Open your browser and navigate to the frontend (usually [http://localhost:5173](http://localhost:5173)).
2. Use the form to add superheroes.
3. The superhero list will update in real-time to display newly added superheroes, ordered by humility score.

## Screenshots

### Backend (API)
![image](https://github.com/user-attachments/assets/ece3adfe-76bb-4ebe-ada1-3ac53747f170)


### Frontend (UI)

![image](https://github.com/user-attachments/assets/2a2397b6-de9d-41df-a3cf-b8573ad17432)


## If I Had More Time

If I had more time, I would:
- Implement authentication and authorization, allowing users to log in and manage their superhero lists.
- Persist the data to a database instead of using an in-memory solution, allowing the data to persist between server restarts.
- Enhance the frontend with more features such as editing and deleting superheroes, and improving the layout and design for better user experience.

## Collaboration

In a real-world scenario, I would collaborate with my team by:
- Reviewing each other's code to ensure quality, maintainability, and performance.
- Setting up regular meetings to discuss progress and resolve challenges.
- Breaking down the tasks into smaller chunks and assigning them based on expertise, such as frontend, backend, and testing.
- Leveraging tools like GitHub Issues and Pull Requests to track bugs and features, ensuring smooth collaboration and version control.

---

Thank you for checking out this project! Let me know if you have any questions or suggestions for improvement.
```

