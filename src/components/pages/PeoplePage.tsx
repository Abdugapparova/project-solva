import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../pages/css/people.css'

const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedPerson) {
      const updatedPerson = location.state.updatedPerson;
      setPeople((prevPeople) =>
        prevPeople.map((person) =>
          person.name === updatedPerson.name ? updatedPerson : person
        )
      );
    }
  }, [location.state]);

  useEffect(() => {
    fetchPeople(currentPage);
  }, [currentPage]);

  const fetchPeople = async (page: number) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      setPeople(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10)); 
    } catch (error) {
      console.error('Error fetching people:', error);
    }
  };

  const handleRowClick = (person: any) => {
    navigate(`/people/${person.name}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>People</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.name} onClick={() => handleRowClick(person)}>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PeoplePage;