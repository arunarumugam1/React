import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about1 from './about1.jpg'
import about2 from './about2.jpg';
import about3 from './about3.jpg';
import about4 from './about4.jpg';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';



export function About()
{
    return(

        <>
        

        <div className='container-fluid bg-success'>
            <div className='row  p-5'>
                <div className='col-lg-12 text-center p-5 '>
                    <h1 className='text-light '>About our form</h1>
                    <p className='text-light '>Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. Fruits are usually
                         eaten raw, although some varieties can be cooked. They come in a wide variety of colours, shapes and flavours.
                    </p>

                </div>
               
            </div>


           
               
               
               
        
        <div className='row text-center m-1' >
               <div className='col-lg-3 bg-light '>
                    <h1>vegetables </h1>
                    <p className='col-lg-12'>lorenm ipusum dolor sit amet constructor adipulting elit</p>

                </div>
                <div className='col-lg-3 bg-light  '>
                    <h1>Flexibility</h1>
                    <p  className='col-lg-12'>lorenm ipusum dolor sit amet constructor adipulting elit</p>

                </div>
                <div className='col-lg-3 bg-light '>
                    <h1>Our Products </h1>
                    <p  className='col-lg-12'>lorenm ipusum dolor sit amet constructor adipulting elit</p>

                </div>
                <div className='col-lg-3 bg-light'>
                    <h1>How it works </h1>
                    <p  className='col-lg-12'>lorenm ipusum dolor sit amet constructor adipulting elit</p>

                </div>


            </div>

        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 '>
                    <img src={about1} className="col-lg-12"/>
                      
                </div>
                <div className='col-lg-3 '>
                    <img src={about2} className="col-lg-12"/>
                      
                </div>
                <div className='col-lg-3 '>
                    <img src={about3} className="col-lg-12"/>
                      
                </div>
                <div className='col-lg-3 '>
                    <img src={about4} className="col-lg-12"/>
                      
                </div>

            </div>

        </div>



        
        
        </>
    );
}
