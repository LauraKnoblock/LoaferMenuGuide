import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';
import axios from 'axios';

function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [selectedCategory, setSelectedCategory] = useState('none');
  const categoryFlashcards = {
    bread: SAMPLE_FLASHCARDS.filter(card => card.category === 'bread'),
    sandwiches: SAMPLE_FLASHCARDS.filter(card => card.category === 'sandwiches'),
    lunchSoupSalad: SAMPLE_FLASHCARDS.filter(card => card.category === 'lunchSoupSalad'),
    snacksSides: SAMPLE_FLASHCARDS.filter(card => card.category === 'snacksSides'),
    sauces: SAMPLE_FLASHCARDS.filter(card => card.category === 'sauces'),
    pizza: SAMPLE_FLASHCARDS.filter(card => card.category === 'pizza'),
    dinnerStarters: SAMPLE_FLASHCARDS.filter(card => card.category === 'dinnerStarters'),
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    if (newCategory === 'none') {
      setFlashcards([]);
    } else {
      setFlashcards(categoryFlashcards[newCategory]);
    }
  };

  // useEffect(() => {
  //   axios
  //   .get('https://opentdb.com/api.php?amount=10')
  //   .then(res => {
  //     setFlashcards(res.data.results.map((questionItem, index) => {
  //       const answer = decodeString(questionItem.correct_answer);
  //       const options = [...questionItem.incorrect_answers.map(a => decodeString(a)), answer]
  //       return {
  //         id: `${index}-${Date.now()}`,
  //         question: decodeString(questionItem.question),
  //         answer: answer,
  //         options: options.sort(() => Math.random() - .5) 
  //       }
  //     })) 
  //   })
  // }, [])


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
        </select>
      </div>
    <div className="container">
   <FlashcardList flashcards ={flashcards}/>
   </div>
   </div>
   );
  }

   const SAMPLE_FLASHCARDS = [
    { id: 1,
      name: "Light & Mild",
      category: "bread",
      description:`Our flagship sourdough or "pain au levain," this loaf has an open, custardy crumb and a brittle and crackery crust. Light and mild features a mild sourness and creamy, sweet wheat flavors.`,
      image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p4_i3_w1280.jpeg?dpr=1.25',
     ingredients: `Sifted Wheat
     Whole Wheat (Janie's mill)
     Water
     Salt`
    },

    {
      id: 2,
      name: "Janie's Bread",
      category: 'bread',
      image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p112_i3_w2048.jpeg?width=1280&dpr=1.25',
      description: `This bread is made with a local Whole Wheat that is stone-milled fresh for us in Ashkum, IL`,
      ingredients: `Transitional Whole Kernel wheat flour from The Mill at Janie's Farm (for nutrition and flavor)
      Dark rye flour from Janies
      High protein bread flour from Janie's (for gluten strength)
      Water
      Salt`
  },
  {
    id: 3,
    name: `Hoagie`,
    category: 'bread',
    image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p355_i1_w2048.jpeg?width=1280&dpr=1.25',
    description: `Hoagies are a classic sandwich shop bread. It’s a soft white bread with a tender crumb and mild flavor.`,
    ingredients: `high gluten wheat
    Durum wheat
    Water
    Sugar
    Instant yeast
    Salt
    Soy oil`
},
{
  id: 4,
  name: `Semolina`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p50_i4_w2048.jpeg?width=1280&dpr=1.25',
  description: `This is our take on a classic Italian table bread. The sesame seeds give the bread a warm nutty flavor, while the oil gives the crumb a silky smooth texture.`,
  ingredients: `Sifted Wheat
  Whole Durum Wheat
  Soy Oil
  Water
  Salt
  Sesame Seeds`
},
{
  id: 5,
  name: `Marble Rye`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p46_i5_w3600.jpeg?width=1280&dpr=1.25',
  description: `This is a classic New York Style Deli rye bread.`,
  ingredients: `High Gluten Wheat
  Whole Rye Flour from Janie’s Mill
  Water
  Molasses
  Cocoa Noir
  Carraway
  Salt`
},
{
  id: 6,
  name: `Demi-Baguette`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p758_i2_w4032.jpeg?width=1280&dpr=1.25',
  description: `This is the classic French bread. This bread offers a crispy crust with a soft pillowy interior. *AVAILABLE AFTER 3PM*`,
  ingredients: `Sifted Wheat
  Whole Wheat
  Rye
  Water
  Salt
  Yeast`
},
{
  id: 7,
  name: `Seeded Janie’s Bread`,
  category: 'bread',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p166_i1_w500.jpeg?dpr=1.25',
  description: `This bread is our Local Whole Wheat with the addition of seeds. It’s rich, earthy, and offers a variety of textures.`,
  ingredients: `Transitional Whole Wheat from The Mill at Janie’s Farm
  Water
  Salt
  Flax
  Millet
  Pumpkin Seed
  Sunflower Seed
  Sesame Seed`
},
{
  id: 8,
  name: `Cheesy Bread`,
  category: "snacksSides",
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p296_i4_w2048.jpeg?width=1280&dpr=1.25',
  description: `This focaccia dough is baked with a sharp white cheddar cheese and topped with breadcrumbs.`,
  ingredients: `High Gluten Wheat
  Water
  Sugar
  Salt
  Yeast
  White Cheddar
  Breadcrumbs
  Olive oil `
},
{
  id: 9,
  name: `Pizza Rossa`,
  category: 'snacksSides',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p305_i5_w2048.jpeg?width=1280&dpr=1.250',
  description: `This focaccia dough has a spicy salty tomato topping.`,
  ingredients: `High Gluten Wheat
  Water
  Sugar
  Salt
  Yeast
  Crushed tomatoes
  Maldon sea salt
  Chili oil`
},
{
  id: 10,
  name: `Bistro Beef`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p151_i2_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients: `Hoagie
  Bistro sauce
  Gruyere cheese
  Pickled Peppers
  Roast Beef
  Maldon sea salt`
},
{
  id: 11,
  name: `Turkey & Swiss`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p330_i4_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients: `Light & Mild
  Famous Sauce
  Emmenthaler Cheese
  Whole Leaf Little Gem
  Roasted Turkey Breast
  Salt
  Pepper`
},
{
  id: 12,
  name: `Ham & Cheddar`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p326_i4_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients: `Marble Rye
  Grainy Mustard
  White Cheddar Cheese
  Dill Pickles
  City Ham
  Butter`
},
{
  id: 13,
  name: `Smoked Trout Salad`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p420_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients: `Bianca
  Basic Mayo
 Little Gem Leaves
 (tossed in Lemon Juice, Olive oil, salt, and pepper)
 Smoked Trout Salad
 -- Smoked Trout
 -- Basic Mayo
 -- Capers
 -- Fennel
 -- Shallot
 -- Bread & Butter Pickle
 -- Grainy Mustard
 -- Lemon Juice`
},
{
  id: 14,
  name: `Roasted Pork`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p177_i4_w3600.jpeg?width=1280&dpr=1.25',
  description: `Our take on a Cuban Sandwich`,
  ingredients: `Hoagie
  Yellow Mustard
  Garlic Mayo
  Gruyere Cheese
  Dill Pickles
  Roasted Pork
  Prosciutto`
},
{
  id: 15,
  name: `Smoked Beet`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p141_i2_w3600.jpeg?width=1280&dpr=1.25',
  description: `A vegetarian take on a classic Reuben`,
  isVegan: true,
  ingredients: `Hoagie
  100k Island Dressing*
  Smoked Beets
  Emmenthaler Cheese
  Sauerkraut`
},
{
  id: 16,
  name: `Nut Butter`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p221_i3_w1832.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients: `Light & Mild
  Nut Butter
  Jelly
  Salted Whipped Butter`
},
{
  id: 17,
  name: `Chicken Salad`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p328_i3_w2048.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients: `Bianca
  Basic Mayo
  Little Gem Leaves
  (tossed with Lemon Juice, Olive Oil, Salt, and Pepper)
  Chicken Salad
  --Roasted Chicken
  --Basic Mayo
  --Shallot
  --Bread & Butter Pickles
  --Grainy Mustard
  --Lemon Juice
  --Tarragon
  --Parsley`
},
{
  id: 18,
  name: `Egg Salad`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p508_i6_w3024.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients:`Oat Porridge
  Famous Sauce
  Little Gem Leaves
  Salt & Pepper
  Egg Salad
  --Hard Boiled Eggs
  --Salt
  --Celery
  --Basic Mayo
  --Dill
  --Chives`
},
{
  id: 19,
  name: `Bacon Turkey Bianca`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p364_i4_w1671.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients:`Bianca
  Roasted Tomato Mayo
  Little Gem Leaves
  Turkey Breast
  Salt & Pepper
  Neuskes Bacon`
},
{
  id: 20,
  name: `Toscano`,
  category: 'sandwiches',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p316_i3_w2048.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients:`Bianca
  Basic Mayo
  Pickled Banana Peppers
  Salami
  Pecorino Toscano`
},
{
  id: 21,
  name: `Curry Corn and Potato Soup`,
  category: 'lunchSoupSalad',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p603_i3_w3024.jpeg?width=1280&dpr=1.25',
  description: ``,
  isVegan: true,
  ingredients:`--Base
  Corn & Corn Stock
  Water
  Russet Potatoes
  Yellow Onion
  Garlic
  Salt
  Ginger
  Coconut Milk
  Curry Powder
  Turmeric
  Cumin
  Coriander
  Paprika
  Soy oil
  --Charred Corn and Poblano Relish
  Poblano Peppers
  Lime Juice and Zest
  Ginger
  Corn`
},
{
  id: 22,
  name: `Basic Mayo`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p536_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: `Basic Mayo is a very classic sauce. It provides fat, acid, and salt.`,
  ingredients:`Egg Yolk
  White Distilled Vinegar
  Salt
  Soy Oil`
},
{
  id: 23,
  name: `Bistro Sauce`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p537_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: `Bistro sauce is a mustard and horseradish sauce. Unlike many Horseradish sauces, Bistro sauce is an emulsification instead of a mixture. This allows for a consistently thick sauce.`,
  ingredients:`Garlic
  Horseradish
  Grainy Mustard
  Egg Yolk
  White Distilled Vinegar
  Salt
  Soy Oil`
},
{
  id: 24,
  name: `Marinara`,
  category: 'pizza',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p110_i1_w2048.jpeg?width=1280&dpr=1.25',
  description: `The Marinara is our only vegan option for pizza. It is a spicy, garlicky, herbal pizza emphasizing the brightness of the tomato sauce and the foral heat of the chili oil.`,
  ingredients:`Pizza Sauce
  Oregano
  Basil
  Maldon Sea Salt
  Chopped Calabrian Chili's
  Garlic Slices
  Garlic oil`,
  isVegan: true,
},
{
  id: 25,
  name: `Pepperoni`,
  category: 'pizza',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p148_i1_w2048.jpeg?width=1280&dpr=1.25',
  description: `We take a classic Pepperoni and brighten it up with the fruity heat of Calabrian Chilis.`,
  ingredients:`Pizza Sauce
  Shredded Mozarella
  Oregano
  Basil
  Ezzo Pepperoni
  Calabrian Chilis
  Grana Padano
  Fresh Mozarella`
},
{
  id: 26,
  name: `Caeser Salad`,
  category: 'dinnerStarters',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p174_i1_w3024.jpeg?width=1280&dpr=1.25',
  description: `We take a classic Pepperoni and brighten it up with the fruity heat of Calabrian Chilis.`,
  ingredients:`Romaine
  Little Gem Lettuce
  Salt Pepper
  Anchovy
  Capers
  Chili Flake
  Bread Crumbs
  Grana Padano
  Caesar Dressing`
},
{
  id: 27,
  name: `Pretzel`,
  category: "snacksSides",
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p206_i4_w2048.jpeg?width=1280&dpr=1.25',
  description: `Naturally leavened pretzel with your choice of house mustard or whipped & salted butter.`,
  ingredients:`Sifted Wheat
  Malted Barley
  Butter
  Salt
  Water
  Dipped in Lye`
},

{
  id: 28,
  name: `Chocolate Chip Cookie`,
  category: 'snacksSides',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p386_i2_w2184.jpeg?width=1280&dpr=1.25',
  description: `These are classic, Grandma Style cookies. Firm on the outside and softer towards the center.`,
  ingredients:`Sifted Wheat
  Egg
  Butter
  Brown Sugar
  White Sugar
  Salt
  Baking Soda
  Baking Powder
  Chocolate Chips`
},
{
  id: 29,
  name: `Garlic Mayo`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p539_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: `Garlic Mayo is an adaptation on Basic Mayo that provides a rich garlic flavor.`,
  ingredients:`Egg Yolk
  White Distilled Vinegar
  Salt
  Garlic
  Soy Oil`
},
{
  id: 30,
  name: `Buttermilk Dressing`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p491_i2_w3600.jpeg?width=1280&dpr=1.25',
  description: `Our house buttermilk dressing! Perfect for your salad, pizza rossa, carrots, and pretty much everything else.`,
  ingredients:`Egg Yolk
  Buttermilk
  Shallot
  Sour Cream
  Garlic
  Lemon Juice
  Salt
  Soy Oil`
},
{
  id: 31,
  name: `Grainy Mustard`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p543_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: `Our house mustard featured with the pretzel and on our ham sandwich. Made with Busch Bavarian.`,
  isVegan: true,
  ingredients:`Brown Mustard Seed
  Yellow Mustard Seed
  Champagne Vinegar
  White Distilled Vinegar
  Salt`
},
{
  id: 32,
  name: `100k Island Dressing`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p540_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: `100k Island is a slightly brighter version of 1,000 Island, with Hard Boiled Eggs diced in and a little kick with sriracha added.`,
  ingredients:`Egg Yolk
  Shallot
  Garlic
  Bread & Butter Pickles
  Ketchup
  Sriracha
  Salt
  Black Pepper
  Soy Oil
  Hard Boiled Eggs`
},
{
  id: 33,
  name: `Famous Sauce`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p538_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: `Inspired by the renowned Durkee Famous Sauce -it's a tangy cooked egg yolk sauce reminiscent of Deviled Egg filling. Goes great with kettle chips.`,
  ingredients:`Cooked Egg Yolk
  Basic Mayo
  White Distilled Vinegar
  Water
  Yellow Mustard
  Yellow Mustard Powder
  Sugar
  Salt
  Paprika`
},
{
  id: 34,
  name: `Roasted Tomato Mayo`,
  category: 'sauces',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p541_i1_w3600.jpeg?width=1280&dpr=1.25',
  description: `With tomatoes being seasonal, the sauce is meant to emulate the wet tomato texture and flavor on the sandwich while still being a rich and sharp mayo. Provides acid, salt, fat and some heat with the addition of the calabrian chilies in the sauce.`,
  ingredients:`Roasted Valoroso whole plum tomatoes (broken open, squeezed of most of their juice, and roasted at a high temperature to caramelize and bring out a richer flavor)
  Egg Yolk
  Garlic, fresh
  Calabrian Chiles
  Lemon Juice
  Valoroso tomato juice (reserved liquid from the can of whole plum tomatoes, separated from the whole tomatoes)
  Salt,
  Soy Oil`
},
{
  id: 35,
  name: `Dill Dip`,
  category: 'sauces',
  image: '',
  description: ``,
  ingredients:`Soy Oil
  Egg Yolk
  Buttermilk
  Sour Cream
  Lemon Juice
  Salt
  Dried Minced Onion
  Dried Minced Garlic
  Fresh Dill`
},
{
  id: 36,
  name: `Potato Salad`,
  category: 'snacksSides',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p187_i3_w3600.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients:`Cooked Red Skin New Potatoes(Potatoes, Water, Salt)
  Basic Mayo
  Yellow Mustard
  Dill
  Bread & Butter Pickles`
},
{
  id: 37,
  name: `Little Gem Salad`,
  category: 'lunchSoupSalad',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p372_i3_w3024.jpeg?width=1280&dpr=1.25',
  description: ``,
  ingredients:`Little Gem Lettuce
  Romaine Lettuce
  Salt & Pepper
  Breadcrumbs
  Fine Herbs
  Pickled Shallots

  ADDITIONAL TOPPINGS
  Sub Buttermilk for Olive Oil and Lemon
  Picked Chicken
  Bacon
  Smoked Beets`
},
{
  id: 38,
  name: `Chicken & Rice Soup`,
  category: 'lunchSoupSalad',
  image: 'https://129144036.cdn6.editmysite.com/uploads/1/2/9/1/129144036/s642576876884555124_p175_i2_w3600.jpeg?width=1280&dpr=1.25',
  description: `Classic, brothy goodness`,
  ingredients:`Chicken Broth
  -- Concentrated chicken stock
  -- Salt
  Carrots
  Celery
  Chicken
  Lemon Juice
  Schmaltz`
},
{
  id: 39,
  name: `Strawberry Jelly`,
  category: 'sauces',
  image: '',
  isVegan: true,
  description: ``,
  ingredients:`Strawberry
  Sugar
  Lemon
  Pectin`
},
{
  id: 39,
  name: `Nut Butter`,
  category: 'sauces',
  image: '',
  isVegan: true,
  description: ``,
  ingredients:`Roasted Peanuts
  Salt`
},
{
  id: 40,
  name: `Dill Pickles`,
  category: 'snacksSides',
  image: '',
  isVegan: true,
  description: ``,
  ingredients:`Cucumbers
  White Distilled Vinegar
  Water
  Salt
  Garlic
  Dill`
},
{
  id: 41,
  name: `Pickle Spears`,
  category: 'snacksSides',
  image: '',
  isVegan: true,
  description: ``,
  ingredients:`Cucumbers, cut into quarters lengthwise
  White Distilled Vinegar
  Water
  Salt
  Sugar
  Garlic, fresh
  Dill, fresh
  Garlic, dried
  Dill seed
  Yellow Mustard Seed
  Black Peppercorns
  Crushed Red Pepper Flakes
  Dried Onion
  Calcium Chloride`
},
   ];

export default App;
