"use client";

import { useEffect, useState } from "react";
import Cell from "./components/cell";

const winningComp = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

export default function Home() {
  const[cells , setCells] = useState(["","","","","","","","",""]);
  const[go , setGo] = useState("circle");
  const[winningMessage , setWinningMessage] = useState("");

  useEffect(()=>{
    winningComp.forEach((comp)=>{
      const circleWin = comp.every((cell)=> cells[cell] === "circle");
      const crossWin = comp.every((cell)=> cells[cell] === "cross");
      if(circleWin){
        setWinningMessage("The Circle winer");
      }else if(crossWin){
        setWinningMessage("The Cross winer");
      }
    })
  },[cells , winningMessage]);
  useEffect(()=>{
    if(cells.every((cell)=> cell !== "") && !winningMessage ){
      setWinningMessage("draw!")
    }
  },[cells , winningMessage])

  return(
    <div className="container">
      <div className="gameboard">
        {cells.map((cell , index)=>(
          <Cell id={index} key={index} cells={cells} setCells={setCells} cell={cell} go={go} setGo={setGo} winningMessage={winningMessage}/>
        ))}
      </div>
      <div>{winningMessage}</div>
      {!winningMessage && <div>{`Turn of ${go} now !`}</div>}
    </div>
  )
}