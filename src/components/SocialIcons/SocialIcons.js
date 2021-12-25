import React,{Component} from 'react';

import './SocialIcons.css';
import { media } from './SocialMedia';

class SocialIcons extends Component{
  render(){
    return(
      <div className="container flex">
          { media.map(social => (
            <div className="mySocialMediaIcons">
              <a href={social.url} target="_blank">
              <img src={social.image} alt=""></img>
              </a>
              </div>
            ))
          }
      </div>
    );
  }
}

export default SocialIcons;
