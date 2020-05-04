import React from "react";
import "./Menustyle.css";
import {Link} from "react-router-dom";
export default class Menu extends React.Component{
    render()
    {
        return(
            <div className="Menustyle">
            <ul>
                 {/* <li>Home</li> 
                <li>About</li>
                <li>Contact</li>  */}
               
                     <li><Link to="/">Home</Link> </li>
                     <li><Link to="About">Aboutus</Link> </li>
                     <li><Link to="Course">Course</Link> </li> 
                
            </ul>
            </div>
        );
    }
}