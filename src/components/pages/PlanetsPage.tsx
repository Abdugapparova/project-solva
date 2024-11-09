import React, { useEffect, useState } from 'react';

const PlanetsPage: React.FC = () => {
  const [planets, setPlanets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => {
        setPlanets(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Planets from Star Wars</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => (
            <tr key={index}>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
              <td>{planet.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanetsPage;
