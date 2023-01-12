import React from "react";
import './home1.css';
import { BrowserRouter,Routers,Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import logo from '../responsive/logo.jpg';


export function Home(){
    return(
        <>
        <div className="homeimg">
            <div className="container p-5">
                <div className="row p-5">
                    <div className="col-lg-6 p-5">
                        <h3 className="text-success pl-5">Fresh Fruits</h3>
                        <h1 className="ortcolor  pl-2">ORGANIC</h1>
                        <p className="text-light text-center">Wild Earth Foods Organic Store in Coimbatore was started with the vision of making an organic lifestyle accessible to all at an affordable price. It all began with ourpassion for native cattle breeds. In 2012, My father K M Senthil and I started breeding cattle as an attempt at saving and preserving our native cattle breeds.</p>
                        <button href="#" className="bg-success p-1 m-5 orbtnfirst text-light">Learn more</button>
                    </div>
                    <div className="col-lg-6 &nbsp;"></div>
                </div>
            </div>
        </div>
        </>
    );
}