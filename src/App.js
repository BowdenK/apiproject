import './App.css';
import React, { useState, useEffect } from "react"
import Card from './components/Card';
import Button from './components/Button';
import Counter from './components/Counter';

const App = () => {
  const [mtgCard, setmtgCard] = useState('')
  const [size, setSize] = useState(7)
  let cardSum = 0;
  
  {if(size < 1){setSize(1)}}
  {if(size > 10){setSize(10)}}

  const getmtgCard = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/cards?pageSize=' + size + '&contains=imageUrl&random=true')
    //using url query parameters to search/filter what data is wanted.
    //contains=imageUrl - verifys that the card has an image to display.

    const data = await response.json()
    setmtgCard(data)
  }
  useEffect(() => {
    getmtgCard()
    
    console.log(size)
  },[])
  
  if(!mtgCard) return <h1>loading...</h1>
  return (
    
    <div className='base'>
      <div>
        <h1 className='MainTitle'>Magic: The Gathering</h1>
        <h2 className='MainTitle'>Random Team Generator</h2>
        <div className='Controls'>
          <h3>Team Size:</h3>
          <Counter 
            sizeChanger={setSize} 
            size={size}/>
        </div>
        <div id='reroll'>
          <Button 
            className='rollBtn' 
            func={getmtgCard} 
            text='Roll Team' 
            style='rollBtn'></Button>
        </div>
      </div>
      <div className='container'>
        {mtgCard.cards.map((cardStats, index) => {
          cardSum = index;
          return <Card 
            cardStats={cardStats} 
            sum={cardSum} 
            rarity={cardStats.rarity}/>
        })}
      </div>
        <p>Todo List</p>
          <ul>
            <li>Styling</li>
            {/* <li>Add Re-roll button for each individual card</li> */}
            <li></li>
            <li></li>
            <li></li>
            <li>Bug: card name can push down image if too long</li>
            <li></li>
          </ul>
    </div>
  )
}

export default App;
