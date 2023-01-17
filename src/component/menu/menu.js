import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle'

import 'bootstrap/dist/css/bootstrap.css';


export function Menu(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#"></a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link bg-light">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sp' className="nav-link bg-light">Superover</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/cg' className="nav-link bg-light">Congratscard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/social' className="nav-link bg-light">socialbutton</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/notification' className="nav-link bg-light">Notification</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className="nav-link bg-light">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/tech' className="nav-link bg-light">Technology</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/responsive/overall' className="nav-link bg-light">Overall</Link>
                    </li>
                </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>









{/* 

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerdemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link bg-light">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sp' className="nav-link bg-light">Superover</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/cg' className="nav-link bg-light">Congratscard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/social' className="nav-link bg-light">socialbutton</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/notification' className="nav-link bg-light">Notification</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className="nav-link bg-light">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/tech' className="nav-link bg-light">Technology</Link>
                    </li>
                </ul>
                <from className="form-inline my-2 my-lo-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Srarch"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </from>
            </div>
        </nav> */}
        </>
    );

}