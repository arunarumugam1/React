import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";

export function Menu(){
    return(
        <>
        <nav className="navbar navbarexpand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerdemo1" aria-controls="navbarToggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sp' className="nav-link">Superover</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/cg' className="nav-link">Congratscard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/social' className="nav-link">socialbutton</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/notification' className="nav-link">Notification</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/tech' className="nav-link">Technology</Link>
                    </li>
                </ul>
                {/* <from className="form-inline my-2 my-lo-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Srarch"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </from> */}
            </div>
        </nav>
        </>
    );

}