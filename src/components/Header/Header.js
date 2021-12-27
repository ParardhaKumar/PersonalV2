import React,{Component} from 'react';

import * as Content from '../Home/Content';
import './Header.css';

class Header extends Component{

  render(){
    return(
      <div>
      <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id=""></input>
        <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
        <ul className="menu-items">
            <li><a href={Content.resume}  target="_blank" rel="noreferrer">Resume</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Drop A Note</a></li>
            <li><img src="random.jpg" id="nav-img" alt=""></img></li>
        </ul>
    </div>
</nav>
      </div>
    );
  }

}

export default Header;
