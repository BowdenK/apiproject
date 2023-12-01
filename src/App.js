import './App.css';
import { useState, useEffect } from "react"
import Card from './components/Card';

const App = () => {
  const [mtgCard, setmtgCard] = useState('')
  let cardSum = 0;

  // const mtg = require('mtgsdk')

  // mtg.card.find(3)
  // .then(result => {
  //   console.log(result.card.name)
  // })

  // const getDnd = async () => {
  //   const response = await fetch('https://www.dnd5eapi.co/api/classes/paladin/spells')
  //   const data = await response.json()
  //   setmtgCard(data)
  // }
  // useEffect(() => {
  //   getDnd()
  // }, [])
  const getmtgCard = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/cards?pageSize=7&random=true')
    const data = await response.json()
    setmtgCard(data)
  }
  useEffect(() => {
    getmtgCard()
  }, [])


  // come back to this llll
  if(!mtgCard) return <h1>loading...</h1>
  return (
    
    <div className='base'>
      <div>
      <h1 className='MainTitle'>Magic The Gathering</h1>
      <h2 className='MainTitle'>Random Team Generator</h2>
      </div>
      <div className='container'>
        {mtgCard.cards.map((spell, index) => {
          cardSum++;
          return <Card spell={spell} sum={cardSum}/>
        })}
      </div>
      <p>Todo List</p>
        <ul>
          <li>Styling</li>
          <li>Add Re-roll button</li>
          <li>No image message, or re-roll card</li>
          <li>Add a second team?</li>
          <li>roll custom number of cards?</li>
          <li>Enlarge card on mouse over</li>
          <li></li>
        </ul>
      <div className="App">
      <header className="App-header">        
        <p></p>        
        <p></p>        
      </header>
    </div>
    </div>
  )
}

export default App;
