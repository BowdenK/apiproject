import Button from "./Button"

const Card = ({ spell, sum }) => {

    return (
        <div>
            <h2>{spell.name}</h2>
            <h2>{spell.rarity}</h2>
            <h2>{sum}</h2>
            <img src={spell.imageUrl}></img>
        </div>
    )
}

export default Card