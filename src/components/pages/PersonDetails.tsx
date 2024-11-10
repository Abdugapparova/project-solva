import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import '../pages/css/people.css';

const PersonDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [person, setPerson] = useState<any>(null);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
        setPerson(response.data.results[0]);
        setValue('name', response.data.results[0].name);
        setValue('height', response.data.results[0].height);
        setValue('mass', response.data.results[0].mass);
        setValue('gender', response.data.results[0].gender);
      } catch (error) {
        console.error('Error fetching person details:', error);
      }
    };

    fetchPerson();
  }, [name, setValue]);

  const onSubmit = (data: any) => {
    console.log('Updated person data:', data);
    navigate('/people', { state: { updatedPerson: data } });
  };

  if (!person) return <p>Loading...</p>;

  return (
    <div className="person-details-container">
      <h2>{person.name}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="person-form">
        <div className="form-group">
          <label>Name</label>
          <input
            {...register('name')}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label>Height</label>
          <input
            {...register('height')}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Mass</label>
          <input
            {...register('mass')}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            {...register('gender')}
            className="form-control"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <button type="submit" className="btn-save-changes">
          Save Changes
        </button>
        <button
          type="button"
          className="btn-back"
          onClick={() => navigate('/people')}
        >
          Back to People List
        </button>
      </form>
    </div>
  );
};

export default PersonDetails;
