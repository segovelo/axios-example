import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return(
        <div className="NavBarDiv">
          <ul className="List">
            <li className="ListButton"> <Link className="NavBarLink"  to="/">Get</Link></li>            
            <li className="ListButton"> <Link className="NavBarLink" to="/post">Post</Link></li>
            <li className="ListButton"> <Link className="NavBarLink" to="/put">Put</Link></li> 
            <li className="ListButton"><Link className="NavBarLink" to="/delete">Delete</Link></li>
            <li className="ListButton"><Link className="NavBarLink" to="/error">Error</Link></li>
            <li className="ListButton"><Link className="NavBarLink" to="/create">Create Instance</Link></li>
            <li className="ListButton"><Link className="NavBarLink" to="/await">Async Await</Link></li>
            <li className="ListButton"><Link className="NavBarLink" to="/useAxios">Hook</Link></li>
          </ul>
       </div>
       );
};
export default NavBar;