import {React,useState,useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export function Cart(){
    const[product,setProdudc]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/food.json')
        .then(res=>res.json())
        .then(data=>setProdudc(data))

    })
    return(
        <>
        {product.map((value,index)=>(
            <div>
                <h4>{value.food_name}</h4>
                <h4>{value.flover}</h4>
                <h4>{value.price}</h4>
                <h4>{value.restorent}</h4>
                <h4>{value.image}</h4>
            </div>
        ))
        }
        </>
    );
}