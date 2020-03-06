import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component{
  render(){
    return(
      <header>
        <div className="navbar">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo hide-on-med-and-down">Groceries List</a>
              <ul className="right">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add an item</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}


export default Header;