import React, { useState } from "react";
import './TicTacToe.css'
import '../TicTacToe/Assets/O.png'
import '../TicTacToe/Assets/X.png'



let data = ["","","","","","","","",""];

const TicTacToe = () => {


    const [count,setCount] = useState(0);
    const [lock, setLock] = useState(false);

const toggle = (e,num) => {
    if (lock) {
        return;
    }
    if(count%2 === 0)
    {
        e.currentTarget.innerHTML = <img src={require('../TicTacToe/Assets/X.png')}/>;
    data[num]='x';
    } else{
        e.currentTarget.innerHTML = '<img src="{Circle}" />';
    data[num]='o';
        
    }
    setCount(count + 1);
};

    return(
        <div className="container">
        <h1 className="title">Tic Tac Toe Game In <span> React</span></h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className="reset">Reset</button>
        </div>
        
    );
}

export default TicTacToe