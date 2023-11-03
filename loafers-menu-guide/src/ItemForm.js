import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

function ItemForm() {
  // Define state to manage form input values
  const [flashcardData, setFlashcardData] = useState({
    name: '',
    category: '',
    description: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlashcardData({
      ...flashcardData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here, you can implement logic to add or edit flashcards
    // You can use the values in flashcardData to perform the operation
    // For example, send a request to an API to add or update the flashcard

    // After submission, you can redirect the user back to the main page
    // using React Router or other navigation methods
  };

  return (
    <div>
      <h2>Add or Edit Flashcard</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Flashcard Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={flashcardData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={flashcardData.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={flashcardData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ItemForm;