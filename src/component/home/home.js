import React from "react";
import './home.css';
import img from '../images/images.jpg'
import { Menu } from "../menu/menu";

export function Hm(){
    return(
        <>
        <Menu/>
        <h4>Hey guys this is Arun</h4>
        <img src={img}></img>
        </>
    );
}