import React from "react";
import { useState,useEffect } from "react";
import mango from '../responsive/mango.jpg';
import banana from '../responsive/banana.jpg';


export function Frut(){
    const[button1,setButton1]=useState(0);
    const[button2,setButton2]=useState(0);

    return( 
        <>
        <div className="bg-warning p-5">
            <div className="bg-light container p-5 m-5 text-center rounded">
                <h1>Bob ate{button1}mangoes {button2}banana</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-4">
                            <img src={mango}/>
                            <br/><br/>
                            <input type="button" value="Eat Mango" onClick={()=>setButton1(button1+1)}/>
                        </div>
                         <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-4">
                            <img src={banana}/>
                            <br/><br/>
                            <input type="button" value="Eat Banana" onClick={()=>setButton2(button2+1)}/>
                        </div>
                        <div className="col-lg-2">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
