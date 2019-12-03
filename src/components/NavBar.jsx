import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css'


class NavBar extends React.Component {
    render() {
        return (
          

            <ul className="margin-top nav border-r flex-column nav-pills width-30">
                
                <li><NavLink className="nav-link font-weight-bold" to="/users" >Users</NavLink></li>
                <li><NavLink className="nav-link font-weight-bold" to="/cars">Cars</NavLink></li>
            </ul>


        )
    }
}


export default NavBar;