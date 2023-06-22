import React, { useState } from 'react';
import axios from 'axios';

const NumberManagement = () => {
  const [urls, setUrls] = useState('');
  const [numbers, setNumbers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/numbers?url=${urls}`);
      setNumbers(response.data.numbers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          placeholder="Enter URLs"
        />
        <button type="submit">Fetch Numbers</button>
      </form>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberManagement;
