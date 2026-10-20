# Blog

A small microservices-based blog project. The React client is separate from two Express services: one manages posts and the other manages comments.

## Project Structure

```text
blog/
|-- client/    React client powered by Vite
|-- posts/     Posts API on port 4000
|-- comments/  Comments API on port 4001
```

## Requirements

- Node.js and npm

## Run Locally

Open a terminal in each project directory and install its dependencies:

```sh
cd client
npm install
npm run dev
```

```sh
cd posts
npm install
npm start
```

```sh
cd comments
npm install
npm start
```

The client URL is printed by Vite (usually `http://localhost:5173`). The APIs listen at `http://localhost:4000` and `http://localhost:4001`.

> The client start script expects Vite, and the React entry point imports `react-dom`. Ensure both are installed in `client` before starting; they are not currently declared in `client/package.json`.

## API

### Posts service (`http://localhost:4000`)

| Method | Endpoint | Request body | Description |
| --- | --- | --- | --- |
| `GET` | `/posts` | None | Return all posts. |
| `POST` | `/posts` | `{"title":"Post title"}` | Create a post. |

### Comments service (`http://localhost:4001`)

| Method | Endpoint | Request body | Description |
| --- | --- | --- | --- |
| `GET` | `/posts/:id/comments` | None | Return comments for a post. |
| `POST` | `/posts/:id/comments` | `{"content":"Comment text"}` | Add a comment to a post. |

## Data Storage

Posts and comments are stored in memory by their respective services. Data is cleared whenever a service restarts. There is no persistent database configured yet.