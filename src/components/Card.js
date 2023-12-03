import Button from "./Button"

const Card = ({ cardStats, sum, rarity }) => {

    return (
        <div>
            <h2 className="cardName">{cardStats.name}</h2>
            <h3 className={rarity}>{cardStats.rarity}</h3>
            <h2>{sum + 1}</h2>
            {/* <Button style='rollBtn' text='Reroll'></Button> */}
            <img src={cardStats.imageUrl} alt='No Image Available'></img>
        </div>
    )
}

export default Card