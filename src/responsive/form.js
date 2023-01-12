import React from "react";

import './form.css';
import formimg from './form.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../node_modules/bootstrap/dist/css/bootstrap.css';


 

export function Form(){
    return(
        <>
         
         <div className="container-fluid  bg-secondary">
              <div className="container ">
                <div className="row p-5">
                    <div className="col-lg-6">
                    <div className="col-lg-12 ">
                        <img src={formimg} className="formimg"/>

                    </div>
                    </div>
                    <div className="col-lg-6 p-5 bg-light">
                        <h3 className=" text-success pl-5">Organic form</h3><br/>

                        <h1 className="text-danger pl-2">OUR PROMISE</h1>

                        <p className=" text-center">organic food, fresh or processed food produced by organic farming methods. Organic food is grown without 
                            the use of synthetic chemicals,
                             such as human-made pesticides and fertilizers, and does not contain genetically modified organisms 
                        </p>
                        <button href="#" className="bg-success p-1 m-5 btnfirst text-light">Learn more</button>
                                    
                    </div>


                </div>

                

              </div>
         </div>
        </>
       
    );

}