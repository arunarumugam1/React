import React from "react";
import './sp.css';
import csk from '../images/csk-img.png';
import rcb from '../images/rcb-img.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";

export function Spover (){
    return(
       <>
       <Menu/>
       <div className="bg-color ">
        <h1 className="let text-light mt-5">Super Over League</h1>
        <div className="container-fluid row "></div>
        <img src={csk} className="csk1 mb-5 mt-5" width="200rem" />
        <img src={rcb} className="rcb1 mb-5 mt-5" width="200rem"/>

       </div>
       </>
    );

}