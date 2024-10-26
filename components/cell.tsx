import { Dispatch, SetStateAction } from "react";

type paramProp = {
    id: number;
    cell: string;
    cells: string[];
    go: string;
    setCells: Dispatch<SetStateAction<string[]>>;
    setGo: Dispatch<SetStateAction<string>>;
    winningMessage: string;
}


const Cell = ({id , cell , cells , setCells , go , setGo , winningMessage}:paramProp) =>{

    const handelClick = ()=>{
        if(winningMessage){
            return;
        }
        const notTaken = !cells[id];
        if(notTaken){
            if(go === "circle"){
                handelChange("circle");
                setGo("cross");
            }else if(go === "cross"){
                handelChange("cross");
                setGo("circle");
            }
        }
    }
    const handelChange = (theChange:string)=>{
        const copyCells = [...cells];
        copyCells[id] = theChange;
        setCells(copyCells);
    }

    return(
        <div className="square" onClick={handelClick}>
            <div className={cell}>{cell ? (cell === "circle" ? "O" : "X"):""}</div>
        </div>
    )
}

export default Cell ;