import React, { useState } from 'react';

const ExerciseSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar ejercicio"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default ExerciseSearch;
