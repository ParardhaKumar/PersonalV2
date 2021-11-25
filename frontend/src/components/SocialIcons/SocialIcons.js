import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faJava } from '@fortawesome/free-brands-svg-icons';

import './SocialIcons.css';
import { media } from './SocialMedia';

class SocialIcons extends Component{
  render(){
    return(
      <div class="container">
          { media.map(social => (
            <div class="mySocialMediaIcons">
              <a href={social.url}> </a>
              <img src={social.image}>
              </img>
              </div>
            ))
          }
      </div>
    );
  }
}

export default SocialIcons;
