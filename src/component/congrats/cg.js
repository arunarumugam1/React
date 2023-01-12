import React from "react";
import './cg.css';
import pro from '../images/congr.png';
import watch from '../images/whtch.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";



export function Card(){
    return(
        <>
        <Menu/>
        <div className="bg-img">
           <h1>Congratulation</h1>
            <div className="bg-cl bg-primary ml-5 mr-5">
                <img src={pro} className="mt-5"/>
                <h1>kiran v</h1>
                <p>Vishnu Instrute of Computer Education and Technology<br/>Bhimavara</p>
                <img src={watch}className=""/>

            </div>
        </div>
        </>
    );

}