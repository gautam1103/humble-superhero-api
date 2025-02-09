import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');

  // Fetch superheroes list when the component mounts
  const fetchSuperheroes = () => {
    axios
      .get('http://localhost:3000/superheroes')
      .then((response) => {
        setSuperheroes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the superheroes!", error);
      });
  };

  // useEffect hook to fetch superheroes on mount
  useEffect(() => {
    fetchSuperheroes();
  }, []);

  // Function to handle form submission (add new superhero)
  const handleAddSuperhero = () => {
    const newSuperhero = {
      name,
      superpower,
      humilityScore: Number(humilityScore),
    };

    axios
      .post('http://localhost:3000/superheroes', newSuperhero)
      .then((response) => {
        // Reset input fields after adding
        setName('');
        setSuperpower('');
        setHumilityScore('');
        // Fetch the updated list of superheroes
        fetchSuperheroes();
      })
      .catch((error) => {
        console.error('Error adding superhero:', error);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Humble Superheros</h1>
        {/* Form to add a new superhero */}
        <input
          type="text"
          placeholder="Enter superhero name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter humility score"
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
        />
        <button onClick={handleAddSuperhero}>Add Superhero</button>

        <h2>Superhero List</h2>
        {/* List of superheroes */}
        {superheroes.length === 0 ? (
          <p>No superheroes yet. Add some!</p>
        ) : (
          <ul>
            {superheroes.map((hero) => (
              <li key={hero.id}>
                <h3>{hero.name}</h3>
                <p>Superpower: {hero.superpower}</p>
                <p>Humility Score: {hero.humilityScore}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
