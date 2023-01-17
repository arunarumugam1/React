import React from "react";
import {Product} from '../responsive/products'
import { Home } from '../responsive/home1';
import { Work } from '../responsive/work';
import { About } from '../responsive/about'
import { Form } from '../responsive/form';
import { Testimo } from '../responsive/testimonial';
import { Conclu } from '../responsive/concluction';


import { Menu } from "../component/menu/menu";





export function Overall() {
    return(
        <>
        <Menu/>
        <Home/>
        <About/>
        <Work/>
        <Form/>
        <Testimo/>
        <Product/>
        <Conclu/>
        
        </>
    );
    
}