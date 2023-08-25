import React, {useState} from "react";
import "./EightBall.css";

const EightBall = ({messages}) => {
    const genRandomNum = () => Math.floor(Math.random() * 19);

    const [message, setMessage] = useState("Think of a Question");
    const [color, setColor]= useState("black");
    const [countRed, setCountRed] = useState(0);
    const [countYellow, setCountYellow] = useState(0);
    const [countGreen, setCountGreen] = useState(0);

    const click = () => {
        const randomNum = genRandomNum();
        const newColor = messages[randomNum].color;
        setColor(newColor);
        setMessage(messages[randomNum].msg);
        if (newColor === "red") {
            setCountRed(countRed + 1);
        }
        if (newColor === "goldenrod") {
            setCountYellow(countYellow +1)
        } 
        if (newColor === "green") {
            setCountGreen(countGreen +1)
        } 
    }

    const startAgain = () => {
        setColor("black");
        setMessage("Think of a Question");
        setCountRed(0);
        setCountYellow(0);
        setCountGreen(0);
    }
    
    return (
        <>
        <div className = "EightBall"  onClick = {click}  style ={{backgroundColor: color}}>
         <p className="EightBall-msg">{message}</p>   
        </div>

        <div className = "EightBall-counter">

            <span className = "EightBall-redCounter"># Red Clicks {countRed}</span>
            <span className = "EightBall-yellowCounter"># Goldenrod Clicks {countYellow}</span> 
            <span className = "EightBall-greenCounter"># Green Clicks {countGreen}</span>  

        </div>
           
        <button className = "EightBall-btn" onClick ={startAgain}>Start Again</button>

       </>
    )

}




export default EightBall

