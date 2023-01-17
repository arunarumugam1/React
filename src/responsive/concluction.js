import React from "react";


 import './concluction.css'
import con from './conclu.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../node_modules/bootstrap/dist/css/bootstrap.css';



export function Conclu(){
    return(
        <>
         
         <div className="container-fluid bg-light">
              <div className="container ">
                <div className="row p-5">



                <div className="col-lg-6 p-5 bg-light">
                        <h3 className=" text-success pl-5">Organic form</h3><br/>

                        <h1 className="text-danger pl-2 p-5">ORGANIC FOOD</h1>

                        <p className=" text-center">Organic food, ecological food or biological food are food and drinks produced by methods complying with the standards of organic farming. Standards vary worldwide, 
                        but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.
                        </p>
                        <button href="#" className=" p-1 m-5 conclubtn text-light">Learn more</button>
                                    
                    </div>


                    <div className="col-lg-6">
                      
                        <img src={con} className="cobgimage col-lg-12"/>

                    
                    </div>

                </div>

                </div>

            
         </div>
        </>
       
    );

}