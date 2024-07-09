import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []); // Adding an empty dependency array to run useEffect only once

  return (
    <>
      <h1>Jokes</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <p>{joke.title}</p>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
