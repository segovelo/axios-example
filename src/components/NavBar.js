import React from 'react';
import { Button } from 'react-bootstrap';
import history from '../components/history';

const NavBar = (props) => {
  const navGet = () => {
    props.history.push('/');
  };

  const navPost = () => {
    history.push('/post');
  };

  const navPut = () => {
    props.history.push('/put');
  };

    
    return(
        <div>
        <Button variant="primary" type="submit" onClick = {navGet}>
            Get
        </Button>
        <Button  variant="primary" type="submit" onClick = {()=>history.push('/post')}>
             Post
        </Button>
        <Button variant="primary" type="submit" onClick = {navPut}>
             Put
        </Button>
    
       </div>
       );
};
export default NavBar;