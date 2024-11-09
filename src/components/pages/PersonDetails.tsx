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
  
    // Fetch the person details
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
  
    // Handle form submission
    const onSubmit = (data: any) => {
      // Save the updated data in local state (could be passed to a context or Redux state)
      console.log('Updated person data:', data);
  
      // Here we are passing the updated person data as state while navigating back to the list
      navigate('/people', { state: { updatedPerson: data } });
    };
  
    if (!person) return <p>Loading...</p>;
  
    return (
      <div>
        <h2>{person.name}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input
              {...register('name')}
              placeholder="Name"
              defaultValue={person.name}
              disabled
            />
          </div>
          <div>
            <label>Height</label>
            <input {...register('height')} placeholder="Height" defaultValue={person.height} />
          </div>
          <div>
            <label>Mass</label>
            <input {...register('mass')} placeholder="Mass" defaultValue={person.mass} />
          </div>
          <div>
            <label>Gender</label>
            <select {...register('gender')} defaultValue={person.gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
                <button type="submit" className="btn-save-changes">
                    Save Changes
                </button>

        </form>
  
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/people')}
        >
          Back to People List
        </button>
      </div>
    );
  };
  
  export default PersonDetails;