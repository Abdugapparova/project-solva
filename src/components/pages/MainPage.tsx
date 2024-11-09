import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка загрузки данных', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
    <div className="container mt-4">
      <h1>Welcome to the SWAPI Explorer</h1>
      <p>Select a category from the navigation menu to explore data from the Star Wars universe.</p>
    </div>
  );
};

export default MainPage;
