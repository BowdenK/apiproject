import './App.css';
import { useState, useEffect } from "react"
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  const [mtgCard, setmtgCard] = useState('')
  let cardSum = 0;
  
  const getmtgCard = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/cards?pageSize=7&random=true')
    const data = await response.json()
    setmtgCard(data)
  }
  useEffect(() => {
    getmtgCard()
  }, [])

  const getOneMtgCard = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/cards?pageSize=1&random=true')
    const data = await response.json()
    setmtgCard(data)
  }
  useEffect(() => {
    getOneMtgCard()
  }, [])


  // come back to this llll
  if(!mtgCard) return <h1>loading...</h1>
  return (
    
    <div className='base'>
      <div>
        <h1 className='MainTitle'>Magic: The Gathering</h1>
        <h2 className='MainTitle'>Random Team Generator</h2>
        <div id='reroll'>
          <Button className='rollBtn' func={getmtgCard} text='Reroll Team' style='rollBtn'></Button>
        </div>
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
