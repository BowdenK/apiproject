import './App.css';
import { useState, useEffect } from "react"
import Card from './components/Card';

const App = () => {
  const [dnd, setDnd] = useState('')
  let cardSum = 0;

  // const mtg = require('mtgsdk')

  // mtg.card.find(3)
  // .then(result => {
  //   console.log(result.card.name)
  // })

  // const getDnd = async () => {
  //   const response = await fetch('https://www.dnd5eapi.co/api/classes/paladin/spells')
  //   const data = await response.json()
  //   setDnd(data)
  // }
  // useEffect(() => {
  //   getDnd()
  // }, [])
  const getDnd = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/cards?pageSize=3&random=true')
    const data = await response.json()
    setDnd(data)
  }
  useEffect(() => {
    getDnd()
  }, [])


  // come back to this llll
  if(!dnd) return <h1>loading...</h1>
  return (
    
    <div>
      <div>
      <h1>Magic The Gathering Cards</h1>
      <p>{cardSum}</p>
      </div>
      {dnd.cards.map((spell, index) => {
        cardSum++;
        return <Card spell={spell} sum={cardSum}/>
      })}
      <div className="App">
      <header className="App-header">
        <p>Some TEXT</p>        
        <p>Lots more Text</p>        
      </header>
    </div>
    </div>
  )
}

export default App;
