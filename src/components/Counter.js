import Button from "./Button"
import {React,useState,useEffect}  from "react";

const Counter = ({sizeChanger, size}) => {
    const [teamSize, setTeamSize] = useState(size)

    //logic to limit range
    {if(teamSize < 1){setTeamSize(1)}}
    {if(teamSize > 10){setTeamSize(10)}}

    const handleDecrement = () => {        
        setTeamSize(prevSize => prevSize - 1);
        sizeChanger(prevSize => prevSize - 1);
    }

    const handleIncrement = () => {
        setTeamSize(prevSize => prevSize + 1);
        sizeChanger(prevSize => prevSize + 1);
    }

    return (
        <div className="Controls">
            <Button style='sqrBtn' text='-' func={handleDecrement}/>
            <h2>{teamSize}</h2>
            <Button style='sqrBtn' text='+' func={handleIncrement}/>
        </div>
    )
}

export default Counter;