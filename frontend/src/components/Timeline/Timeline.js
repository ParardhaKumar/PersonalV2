import React,{Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faJava } from '@fortawesome/free-brands-svg-icons'

import './Timeline.css';

class Timeline extends Component{
  render(){
    return(
      <div>
        <div class="container-fluid">
          <div class="row example-centered">
                <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                    <ul class="timeline timeline-centered">
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>Today</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div><img src="./Barclays.png"></img></div>
                                <p>I am currently working as a Software Developer with the Business Banking Team.</p>
                                <p>Skills Used: <FontAwesomeIcon icon={faGitAlt} />
                                <FontAwesomeIcon icon={faJava} />
                                </p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>May 2019</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                            <div><img src="./IIT.png"></img></div>
                                <h3 class="timeline-title">Mathematics & Computing</h3>
                                <p>Integrated Master of Technology in Mathematics & Computing with Honours (2014-2018) </p>
                            </div>
                        </li>
                        <li class="timeline-item period">
                            <div class="timeline-info"></div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h2 class="timeline-title">April 2016</h2>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>April 02, 2016</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3 class="timeline-title">Event Title</h3>
                                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                    eu pede mollis pretium. Pellentesque ut neque. </p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>April 28, 2016</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3 class="timeline-title">Event Title</h3>
                                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                    eu pede mollis pretium. Pellentesque ut neque. </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
