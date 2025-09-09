const FetchButton = ({ fetchJoke }) => {
  return (
    // Button to trigger fetching a new joke
    // We use an onClick handler to call the function passed down from the parent component
    <button className="fetch-button" onClick={fetchJoke}>Get a New Joke</button>
  )
}

export default FetchButton
