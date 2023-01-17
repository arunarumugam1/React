import React from "react";

import './products.css';
import prd1 from './products1.jpg';
import prd2 from './products2.jpg';
import prd3 from './products3.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

 export function Product(){
    return(
        <>
        
        <div className="container-fluid bg-secondary p-5">
            <div className="row p-3">
                <div className="col-lg-4 text-center bg-light p-5">
                    <img src={prd1} className="col-lg-12 prdc"/>
                    <h3 className="p-5">frush fruits</h3>
                    <p >
                        Shop for fresh Safe to eat fruits online & get them delivered to you through our online fruit & vegetable delivery service
                    </p>
                    <button href="#" className=" p-1 m-5 bg-light para">Learn more</button>
                </div>
                <div className="col-lg-4 text-center bg-light p-5">
                    <img src={prd2} className="col-lg-12 prdc"/>
                    <h3 className="p-5">vegetables</h3>
                    <p >
                        Shop for fresh Safe to eat fruits online & get them delivered to you through our online fruit & vegetable delivery service
                    </p>
                    <button href="#" className=" p-1 m-5 bg-light para ">Learn more</button>
                </div>
                <div className="col-lg-4 text-center bg-light p-5">
                    <img src={prd3} className="col-lg-12 prdc"/>
                    <h3 className="p-5">vegetables</h3>
                    <p >
                        Shop for fresh Safe to eat fruits online & get them delivered to you through our online fruit & vegetable delivery service
                    </p>
                    <button href="#" className=" p-1 m-5 bg-light para">Learn more</button>
                </div>
            </div>
        </div>
        </>
    );
 }