import {React,useState} from "react";

export function Imc(){
    const[buttoncount,setButtoncount]=useState(0)
    // function add(){
    //     setButtoncount(buttoncount+1)
    // }

    return(
        <>
        <h3>Increment</h3>
        <h3>{buttoncount}</h3>
        <input type="button" value="increment" onClick={()=>setButtoncount(buttoncount+1)}/>
        <input type="button" value="decrement" onClick={()=>setButtoncount(buttoncount-1)}/>
        <input type="button" value="reset" onClick={()=>setButtoncount(buttoncount*0)}/>


        </>
    );
}
