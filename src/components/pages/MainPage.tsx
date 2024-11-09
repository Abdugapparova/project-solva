import { useEffect, useState } from 'react';
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
    <div>
      <h1>Список персонажей</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
