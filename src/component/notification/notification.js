import React from "react";
import './notification.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Menu } from "../menu/menu";


export function Comp(){
    return(
        <>
        <Menu/>
        <div className="container-fluid p-2 text-center">
            <h1>Notifications</h1>
            <div className=" p-2">
                <div className="col-lg-12">
                    <div className=" bg-primary m-2 text-center">
                        <h4 className="m-2"><FontAwesomeIcon icon={faCircleCheck} className="one"/>Information Massage</h4>
                    </div>
                </div>
            </div>
        

        <div className=" p-2">
                <div className="col-lg-12">
                    <div className=" bg-success m-2 text-center">
                        <h4 className="m-2"><FontAwesomeIcon icon={faCircleCheck} className="one"/>Success Massage</h4>
                    </div>
                </div>
            </div>
        
            <div className=" p-2">
                <div className="col-lg-12">
                    <div className=" bg-warning m-2 text-center">
                        <h4 className="m-2"><FontAwesomeIcon icone={faBell} className="one"/>Warning Massage</h4>
                    </div>
                </div>
            </div>

            <div className=" p-2">
                <div className="col-lg-12">
                    <div className=" bg-danger m-2 text-center">
                        <h4 className="m-2"><FontAwesomeIcon icone={faBell} className="one"/>Error Massage</h4>
                    </div>
                </div>
            </div>
            </div>
        </>
    );

}