# Sweet as Cocktail

**Sweet as Cocktail** is a full-stack web application that I developed during my study in Dev Academy. It is designed for restaurants to manage their cocktail menu. The application allows users to create, read, update, and delete (CRUD) cocktail menu items. The project uses React for the frontend and Node.js for the backend, following a structured and layered architecture. The frontend communicates with the backend through an API layer.

## Technologies Used

**Frontend**: React, Superagent, CSS, HTML

**Backend**: Node.js, Express.js, SQLite3, Knex

## Installation

#### **From the command line**

```
git clone https://github.com/tifff-wang/sweet-as-cocktails.git
```

```
cd sweet-as-cocktails
```
Install dependencies 
```
npm i
```

Run migrations & seeds
```
npm run knex migrate:latest
npm run knex seed:run
```

To start the dev server 
```
npm run dev
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

## What's next?

When I look back to the backend of this project, I noticed a lack of comprehensive error handling, particularly when interacting with the database and handling HTTP requests and responses. Moving forward, I plan to focus on learning and enhancing the error handling in Node.js to make the application more maintainable and to provide a better user experience.
