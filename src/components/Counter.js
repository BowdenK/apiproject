import Button from "./Button"
import {React,useState,useEffect}  from "react";

const Counter = ({sizeChanger, size}) => {
    const [teamSize, setTeamSize] = useState(size)

    {if(teamSize < 1){setTeamSize(1)}}
    {if(teamSize > 10){setTeamSize(10)}}

    const handleDecrement = () => {        
        setTeamSize(teamSize - 1);
        sizeChanger(teamSize);
    }

    const handleIncrement = () => {
        setTeamSize(teamSize + 1);
        sizeChanger(teamSize);
    }

    // useEffect(() => {
    //     handleDecrement();
    //     handleIncrement();
    // },[teamSize,setTeamSize])

    return (
        <div className="Controls">
            <Button style='sqrBtn' text='-' func={handleDecrement}/>
            <h2>{size}</h2>
            <Button style='sqrBtn' text='+' func={handleIncrement}/>
        </div>
    )
}

export default Counter;