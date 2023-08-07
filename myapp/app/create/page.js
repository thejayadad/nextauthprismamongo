'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';



const Create = () => {
    const router = useRouter();
    const [data, setData] = useState({
      name: '',
      imageSrc: '',
      description: ''
    });

    console.log('Data to be sent:', {
        name: data.name,
        imageSrc: data.imageSrc,
        description: data.description
      });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/create', {
        name: data.name,
        imageSrc: data.imageSrc,
        description: data.description,
        headers: {
          'Content-Type': 'application/json', 
        },
      });
      console.log('New listing created:', response.data);
      const listing = response.data;
      router.push('/'); 

    } catch (error) {
      console.error('Error creating listing:', error);
    }
  };

  return (
    <section>
      <h2>Create Listing</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" 
            value={data.name}
            id='name'
            onChange={(e) => {
            setData({ ...data, name: e.target.value });
            }}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="imageSrc"
            id='imageSrc'
            value={data.imageSrc}
            onChange={(e) => {
            setData({ ...data, imageSrc: e.target.value });
            }}         
          
          />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" 
            id='description'
            type='text'
            value={data.description}
            onChange={(e) => {
            setData({ ...data, description: e.target.value });
            }}          
          />
        </label>
        <br />
        <button type="submit">Create Listing</button>
      </form>
    </section>
  );
};

export default Create;
