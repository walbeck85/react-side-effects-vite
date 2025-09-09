import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // This state holds the current joke text.
  const [joke, setJoke] = useState('');

  // This state indicates whether the app is currently fetching data.
  const [loading, setLoading] = useState(true);

  // useEffect is used here to fetch a joke when the component first mounts.
  // This simulates behavior like "onLoad" in vanilla JS.
  useEffect(() => {
    fetchJoke();
  }, []);

  // This function fetches a joke from the external API.
  // It's reused both on initial mount and on button clicks.
  const fetchJoke = () => {
    setLoading(true); // Indicate loading state before the fetch begins
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);     // Update joke state with fetched joke
        setLoading(false);      // Turn off loading once joke is fetched
      })
      .catch((error) => {
        setJoke('Oops! Something went wrong.'); // Fallback message
        setLoading(false);      // Turn off loading even if there's an error
      });
  };

  // Render the main app UI.
  // We use JokeDisplay to show either a loading message or the current joke,
  // and FetchButton to allow the user to fetch a new joke on demand.
  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* JokeDisplay will either show the loading message or the fetched joke */}
      <JokeDisplay joke={joke} loading={loading} />

      {/* FetchButton lets the user get a new joke on click */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  );
}

export default App;
