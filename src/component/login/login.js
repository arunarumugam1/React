import React from "react";
import './login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import com from '../images/computer.jpg';
import { Menu } from "../menu/menu";



export function Log(){
    return(
        <>
        <Menu/>
        <div className="bg-color p-5">
            <div className="bg-light container row p-5">
                <div className="col-lg-6">
                    <img src={com} className="col-lg-8"/>
                </div>
                <div className="col-lg-6 text-center">
                    <h1>Member Login</h1>
                    <div className="d-flex mr-3 ">
                        <FontAwesomeIcon icon={faEnvelope} className="mt-4 pl-5 bg-light"/>
                        <input type="Email" placeholder="Email" className="  col-lg-7 bg-light "></input><br/>
                    </div><br/>
                        <div className="d-flex mr-3  ">
                            <FontAwesomeIcon icon={faLock} className="mt-4 pl-5 "/>
                            <input type="password" placeholder="password" className="  col-lg-7 bg-light "></input><br/>
                        </div><br/>
                    <div>
                        <button type="submit" className=" mt-3 pl-5 pr-5 bg-success rounded text-light">LOGIN</button>
                        <br/><br/>
                        <h6>Forgot <span className="text-success">Username/password</span></h6>
                        
                        <h6 className="text-success">Create Your Passwod</h6>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}