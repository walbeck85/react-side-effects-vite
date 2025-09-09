# React Side Effects Lab

## Overview
This project is a simple React application that demonstrates how to handle side effects, such as fetching data from an API, using the `useEffect` hook. The app fetches and displays a random programming joke when the page loads and allows users to fetch a new joke by clicking a button. It also includes loading and error states to provide feedback to the user during asynchronous operations.

## Features
- Fetches and displays a random programming joke on page load
- Allows user to request a new joke with a button
- Displays loading message while fetching
- Handles API errors gracefully
- All functionality tested using Vitest

## Technologies Used
- React (with useEffect and useState hooks)
- Vite (for project setup and dev server)
- Vitest (for testing)
- JokeAPI (for joke data)

## Setup

First, clone the repository:

```
git clone git@github.com:walbeck85/react-side-effects-vite.git
cd react-side-effects-vite
```

Run `npm install` to install dependencies.

Then, run `npm run dev` to start the development server. The app will open at a port like `http://localhost:5173` or similar depending on your environment.

In another tab, run `npm run test` to run the test suite.

Before you start building out the application, examine the current code and component hierarchy. This will tell you how components can pass data to each other as well as where that information should be stored.

## Deliverables

- **When our application loads**, make a `GET` request to `https://v2.jokeapi.dev/joke/Programming?type=single` to fetch a joke. Given your component tree, think about which component should be responsible for managing the joke data. Once the data is fetched, store it in state and render the joke on the page.

- **When the `New Joke` button is clicked**, make another `GET` request to `https://v2.jokeapi.dev/joke/Programming?type=single` to fetch a new joke. Update the state accordingly so that the new joke replaces the old one in the UI.

- **While waiting for the fetch request to resolve**, display a loading message to inform the user that a joke is being fetched.

- **If the API request fails**, handle the error gracefully by displaying a message instead of breaking the UI.

## Best Practices

- Use the `useEffect` hook to make API calls at the appropriate lifecycle phase.
- Manage component state using the `useState` hook.
- Keep components modular and reusable.
- Remove unnecessary console logs and commented-out code before submission.

## Testing

To run the test suite:
```
npm run test
```

All functionality is tested to ensure the joke displays on load, updates when the button is clicked, and shows a loading message appropriately.


## Screenshots

![App Screenshot](https://imgur.com/a/l3jDdMn)
