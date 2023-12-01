import Button from "./Button"

const Card = ({ spell, sum }) => {

    return (
        <div>
            <h2 className="cardName">{spell.name}</h2>
            <h3>{spell.rarity}</h3>
            <h2>{sum}</h2>
            {/* <Button style='rollBtn' text='Reroll'></Button> */}
            <img src={spell.imageUrl} alt='No Image Available'></img>
        </div>
    )
}

export default Card