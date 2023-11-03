import React from 'react'
import Flashcard from './Flashcard'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


export default function FlashcardList( {flashcards} ) {
  return (
    <div className="card-grid">
        {flashcards.map(flashcard => {
            return <Flashcard flashcard = {flashcard} key={flashcard.id} />
        })}
      
    </div>
  )
}
