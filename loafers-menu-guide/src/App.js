import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';
import axios from 'axios';
import SearchBar from './SearchBar';
import SAMPLE_FLASHCARDS from './FlashcardData';
function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [selectedCategory, setSelectedCategory] = useState('none');
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    if (selectedCategory === 'none') {
      const filteredCards = SAMPLE_FLASHCARDS.filter(
        card =>
          card.name.toLowerCase().includes(query) ||
          card.ingredients.toLowerCase().includes(query) ||
          (card.isVegan && query === 'vegan')
      );
      setFlashcards(filteredCards);
    } else {
      const filteredCards = categoryFlashcards[selectedCategory].filter(
        card =>
          card.name.toLowerCase().includes(query) ||
          card.description.toLowerCase().includes(query)
      );
      setFlashcards(filteredCards);
    }
  };
  const categoryFlashcards = {
    bread: SAMPLE_FLASHCARDS.filter(card => card.category === 'bread'),
    sandwiches: SAMPLE_FLASHCARDS.filter(card => card.category === 'sandwiches'),
    lunchSoupSalad: SAMPLE_FLASHCARDS.filter(card => card.category === 'lunchSoupSalad'),
    snacksSides: SAMPLE_FLASHCARDS.filter(card => card.category === 'snacksSides'),
    sauces: SAMPLE_FLASHCARDS.filter(card => card.category === 'sauces'),
    pizza: SAMPLE_FLASHCARDS.filter(card => card.category === 'pizza'),
    dinnerStarters: SAMPLE_FLASHCARDS.filter(card => card.category === 'dinnerStarters'),
    redWine: SAMPLE_FLASHCARDS.filter(card => card.category === 'redWine'),
  };
  const filteredFlashcards = selectedCategory === 'none'
    ? flashcards.filter(card =>
        card.name.toLowerCase().includes(searchQuery) ||
        card.description.toLowerCase().includes(searchQuery)
      )
    : categoryFlashcards[selectedCategory].filter(card =>
        card.name.toLowerCase().includes(searchQuery) ||
        card.description.toLowerCase().includes(searchQuery)
      );

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    if (newCategory === 'none') {
      setFlashcards([]);
    } else {
      setFlashcards(categoryFlashcards[newCategory]);
    }
  };


  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  return (
    <div>
    <div className="header">
      <img src="https://images.squarespace-cdn.com/content/v1/59626a54e58c62cb702f966f/1550516597840-RQUDC10WZ33QFTLH6UAZ/Seal_blue.png?format=100w"/>
      <h1>Union Loafers Menu Guide</h1>
      </div>
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="none" disabled>Select a category</option>
          <option value="bread">Bread</option>
          <option value="sandwiches">Sandwiches</option>
          <option value="lunchSoupSalad">Soup & Salad</option>
          <option value='snacksSides'>Snacks & Sides</option>
          <option value='sauces'>Sauces</option>
          <option value="pizza">Pizza</option>
          <option value = "dinnerStarters">Dinner Starters</option>
          <option value = "redWine">Red Wine</option>
        </select>
      </div>
      <div className="searchBar">
        <SearchBar onSearch={handleSearch}></SearchBar>
      </div>
    <div className="container">
   <FlashcardList flashcards ={flashcards}/>
   </div>
   </div>
   );
  }



export default App;
