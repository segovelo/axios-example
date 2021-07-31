import { domain } from 'process';
import React from 'react';
import { Button } from 'react-bootstrap';
import history from '../components/history';
import {Link} from 'react-router-dom';
import '../App.css';

const NavBar = (props) => {
    return(
        <div className="NavBarDiv">
          <ul className="List">
            <li className="ListButton"> <Link className="NavBarLink"  to="/">Get</Link></li>            
            <li className="ListButton"> <Link className="NavBarLink" to="/post">Post</Link></li>
            <li className="ListButton"> <Link className="NavBarLink" to="/put">Put</Link></li> 
            <li className="ListButton"><Link className="NavBarLink" to="/delete">Delete</Link></li>
          </ul>
       </div>
       );
};
export default NavBar;