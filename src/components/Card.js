import Button from "./Button"

const Card = ({ cardStats, sum }) => {

    return (
        <div>
            <h2 className="cardName">{cardStats.name}</h2>
            <h3>{cardStats.rarity}</h3>
            <h2>{sum}</h2>
            {/* <Button style='rollBtn' text='Reroll'></Button> */}
            <img src={cardStats.imageUrl} alt='No Image Available'></img>
        </div>
    )
}

export default Card