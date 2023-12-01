import Button from "./Button"

const Card = ({ spell, sum }) => {

    return (
        <div>
            <h2>{spell.name}</h2>
            <h2>{spell.rarity}</h2>
            <h2>{sum}</h2>
            <img src={spell.imageUrl} alt='No Image Available'></img>
            {/* <Button text='Reroll'></Button> */}
        </div>
    )
}

export default Card