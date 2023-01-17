import React from "react";

import work1 from './workimg.jpg';
import work2 from './workimg1.jpg';
import work3 from './workimg3.jpg';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export function Work(){
    return(
        <>
        <div className="container-fluid bg-success p-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-light">How It's Works?</h1>
                    <p className="text-light">A Transformation in our food and agricultural 
                    system is needed to stop Climate chang UNDP has an innovative responce to the 
                    Current global crisis food smart</p>
                </div>

                <div className="col-lg-4">
                    <img src={work1} className="col-lg-12"/>
                </div>
                <div className="col-lg-4">
                <div className="col-lg-12 bg-light p-5 text-center">
                    <h4>Organic Forming</h4>
                    <p>Help CCD educate farmers to increase crop produce using Sustainable 
                        Framing. Know More! live demo for effective farming
                    </p>

                </div>
            </div>
            <div className="col-lg-4">
                <img src={work2}  className="col-lg-12"/>
            </div>
            <div className="col-lg-4">
                <div className="col-lg-12 bg-light p-5 text-center">
                    <h4>Animal Husbandry</h4><br/>
                    <p>Animal Husbandry id one of the agricultur, 
                        concerned with the animals thatb are riced for meat,fiber,milk,or other product</p>
                </div>
            </div>
            <div className="col-lg-4">
                <img src={work3} className="col-lg-12"/>
            </div>
            <div className="col-lg-4">
                <div className="col-lg-12 bg-light p-5 text-center">
                    <h4>Arable Farming</h4><br/>
                    <p>Arable lamd is any land capable of being plouged and used to groe caps. alernatively,
                        for the purose of agricultor statictics
                    </p>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}