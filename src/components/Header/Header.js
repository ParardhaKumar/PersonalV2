import React,{Component} from 'react';

import * as Content from '../Home/Content';
import './Header.css';

class Header extends Component{

  render(){
    return(
      <div>
      <nav class="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id=""></input>
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <ul class="menu-items">
            <li><a href={Content.resume}  target="_blank">Resume</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><img src="random.jpg" id="nav-img"></img></li>
        </ul>
    </div>
</nav>
      </div>
    );
  }

}

export default Header;
