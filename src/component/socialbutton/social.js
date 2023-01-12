import React from 'react';
import './social.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from '../menu/menu';

export function Social(){
    return(
        <>
        <Menu/>
        <div className="bg-img ">
            <h1 className="text-light font-sans-serif code">Social Button</h1>

            <button type="submit" hraf="#" className='sb bg-warning btn m-2 text-light'>like</button>
            <button type="submit" hraf="#" className='sb bg-light btn m-2 '>comment</button>
            <button type="submit" hraf="#" className='sb bg-primary btn m-2 text-light'>share</button>
        </div>
        </>
    );
}