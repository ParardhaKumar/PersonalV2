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
                                <div>
                                <a href="https://home.barclays/">
                                <img src="./Barclays.png"></img>
                                </a>
                                {
                                // <div class="timeline-location">
                                // <span>
                                // <img class="location" src="./Location.png"></img>
                                // </span>
                                // Pune, India
                                // </div>
                                }
                                </div>
                                <p>I am currently working as a Software Developer with the Business Banking Team.</p>
                                <p>
                                <div class="icon-container">
                                  <div><img src="./git.png" id="git-logo"></img></div>
                                  <div><img src="./spring.svg" id="spring-logo"></img></div>
                                </div>

                                </p>
                            </div>
                        </li>

                        <li class="timeline-item period">
                            <div class="timeline-info"></div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">

                                <h2 class="timeline-title"><img class="graduated-cap" src="./Graduated.png"></img>Graduated May 2019</h2>
                            </div>
                        </li>

                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>May 2019</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                            <div>
                            <a href="https://www.iitism.ac.in/">
                            <img src="./IIT.png"></img>
                            </a>
                            </div>
                                <h3 class="timeline-title">Indian Institute of Technology (ISM) Dhanbad</h3>
                                <p>Integrated Master of Technology in Mathematics & Computing (Honours) (2014-2019) </p>
                            </div>
                        </li>


                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>June 2018</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">

                            <div>
                            <a href="https://www.polyu.edu.hk/en/">
                            <img src="./PolyU.png"></img>
                            </a>
                            </div>

                                <p>Worked with Prof Cedric Yiu Speech Analytics on Speech Analytics and Acoustic Scene Classification using Bi-directional LSTMs.</p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>May 2016</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">

                                <div>
                                <a href="https://coins.co.th/">
                                <img src="./Coins.png"></img>
                                </a>
                                </div>
                                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                    eu pede mollis pretium. Pellentesque ut neque. </p>
                                    <p>Skills Used: <FontAwesomeIcon icon={faGitAlt} />
                                    <FontAwesomeIcon icon={faJava} />
                                    </p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>April 1999 - March 2013</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">

                            <div>
                            <a href="https://www.dpspatna.com">
                            <img src="./DPS.png"></img>
                            </a>
                            </div>
                                <h3 class="timeline-title">Delhi Public School, Patna</h3>
                                <p>High School</p>
                            </div>
                        </li>
                        <li class="timeline-item period">
                            <div class="timeline-info"></div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <img class="born" src="./Newborn.png"></img>
                                <h2 class="timeline-title">1995</h2>
                                <p>June 23rd</p>
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
