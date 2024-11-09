import React, { useEffect, useState } from 'react';

const StarshipsPage: React.FC = () => {
  const [starships, setStarships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(data => {
        setStarships(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Starships from Star Wars</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {starships.map((starship, index) => (
            <tr key={index}>
              <td>{starship.name}</td>
              <td>{starship.model}</td>
              <td>{starship.manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarshipsPage;
