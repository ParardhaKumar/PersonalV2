import React,{Component} from 'react';

import './SocialIcons.css';
import { media } from './SocialMedia';

class SocialIcons extends Component{
  render(){
    return(
      <div class="container flex">
          { media.map(social => (
            <div class="mySocialMediaIcons">
              <a href={social.url} target="_blank">
              <img src={social.image}>
              </img>
              </a>
              </div>
            ))
          }
      </div>
    );
  }
}

export default SocialIcons;
