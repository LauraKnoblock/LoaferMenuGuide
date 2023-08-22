import React, { useState, useEffect, useRef } from 'react';

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState('i')

    const frontEl = useRef();
    const backEl = useRef();
    const VEGAN_ICON_URL =
  'https://upload.wikimedia.org/wikipedia/commons/d/d4/Vegan_friendly_icon.png';

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100));
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
useEffect (() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
});
const ingredientsArray = flashcard.ingredients.split('\n');


    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{height: height}}
            onClick={() => setFlip(!flip)}>

            <div className='front' ref={frontEl}>
                <h3>{flashcard.name}</h3>
                <p>{flashcard.description}</p>
                <img src={flashcard.image} style={{height:'100px'}}></img>
                {flashcard.isVegan && (
          <img
            src={VEGAN_ICON_URL}
            alt='Vegan Icon'
            style={{ width: 'auto', height: '25px', marginLeft: '5px' }}
          />
        )}
            </div>

            <div className='back' ref={backEl}>
                <ul className="ingredient-list">
                    {ingredientsArray.map((ingredient, index) => (
                        <li key={index}>{ingredient.trim()}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
