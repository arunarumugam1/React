import React from "react";
import './tech.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import boots from '../images/bootstrap.jpg';
import js from '../images/javascript.jpg';
import { Menu } from "../menu/menu";

export function Techno(){
    return(
        <>
        <Menu/>
        <div className="container ">
        <h2 className="text-center">Learn 4.0 Technology</h2>
        <h6 className="text-center">Front-end web development is the development of the graphical user<br/> 
        interface of a website, through the use of HTML, CSS, and JavaScript, <br/>
        so that users can view and interact with that website.</h6>
        
        <div className="row">

        
        
         <div className="one col-lg-6">
            <h2>HTML</h2>
            <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser</p>
            <img className="p-5" src={html}/>
         </div>
         <div className="two col-lg-6">
            <h2>CSS</h2>
            <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.</p>
            <img className=" p-5" src={css}/>
         </div>
         <div className="three col-lg-6">
            <h2>BOOTSTRAP</h2>
            <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML.</p>
            <img className=" p-5" src={boots}/>
         </div>
         <div className="four col-lg-6">
            <h2>JAVASCRIPT</h2>
            <p>JavaScript, often abbreviated as JS, is programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</p>
            <img className=" p-5" src={js}/>
         </div>
         

        </div>
        </div>

        </>
    );
}