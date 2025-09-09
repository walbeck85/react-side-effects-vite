// JokeDisplay receives the current joke and loading status as props from App.
// It decides what to display based on the loading state.

// Conditionally render either the loading message or the joke
// This ensures the component shows only one message at a time
const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      <p>
        {loading ? 'Loading...' : joke}
      </p>
    </div>
  )
}

export default JokeDisplay
