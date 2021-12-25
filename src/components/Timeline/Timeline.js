import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faJava } from '@fortawesome/free-brands-svg-icons'

import './Timeline.css';

class Timeline extends Component{
  render(){
    return(
      <div>
        <div className="container-fluid">
          <div className="row example-centered">
                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                    <ul className="timeline timeline-centered">
                        <li className="timeline-item">
                            <div className="timeline-info">
                                <span>Today</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div>
                                <a href="https://home.barclays/">
                                <img src="./Barclays.png" alt=""></img>
                                </a>
                                {
                                // <div className="timeline-location">
                                // <span>
                                // <img className="location" src="./Location.png"></img>
                                // </span>
                                // Pune, India
                                // </div>
                                }
                                </div>
                                <p>I am currently working as a Software Developer with the Business Banking Team.</p>
                                <p>
                                <div className="icon-container">
                                  <div className="icon"><img src="./java.png" id="spring-logo" alt=""></img></div>
                                  <div className="icon"><img src="./spring.png" id="springboot-logo" alt=""></img></div>
                                  <div className="icon"><img src="./oracle.png" id="spring-logo" alt=""></img></div>
                                  <div className="icon"><img src="./nodejs.png" id="spring-logo" alt=""></img></div>
                                    <div className="icon"><img src="./git.png" id="git-logo" alt=""></img></div>
                                    <div className="icon"><img src="./jenkins.png" id="spring-logo" alt=""></img></div>
                                </div>

                                </p>
                            </div>
                        </li>

                        <li className="timeline-item period">
                            <div className="timeline-info"></div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">

                                <h2 className="timeline-title"><img className="graduated-cap" src="./Graduated.png" alt=""></img>Graduated May 2019</h2>
                            </div>
                        </li>

                        <li className="timeline-item">
                            <div className="timeline-info">
                                <span>May 2019</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                            <div>
                            <a href="https://www.iitism.ac.in/">
                            <img src="./IIT.png" alt=""></img>
                            </a>
                            </div>
                                <h3 className="timeline-title">Indian Institute of Technology (ISM) Dhanbad</h3>
                                <p>Integrated Master of Technology in Mathematics & Computing (Distinction) (CGPA: 8.73/10) </p>
                            </div>
                        </li>


                        <li className="timeline-item">
                            <div className="timeline-info">
                                <span>June 2018</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">

                            <div>
                            <a href="https://www.polyu.edu.hk/en/">
                            <img src="./PolyU.png" alt=""></img>
                            </a>
                            </div>
                                <p>Worked with Prof Cedric Yiu Speech Analytics on Speech Analytics and Acoustic Scene Classification using Bi-directional LSTMs.</p>
                                <div className="icon-container">
                                  <div className="icon"><img src="./tensorflow.png" id="git-logo" alt=""></img></div>
                                  <div className="icon"><img src="./python.png" id="git-logo" alt=""></img></div>
                                </div>
                            </div>
                        </li>

                        <li className="timeline-item">
                            <div className="timeline-info">
                                <span>May 2016</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">

                                <div>
                                <a href="https://coins.co.th/">
                                <img src="./Coins.png" alt=""></img>
                                </a>
                                </div>
                                <p>Developed OpsWEB, a ReactJS/Rails application to help automate the Operation team’s recurrent book-keeping tasks </p>
                                <div className="icon-container">
                                  <div className="icon"><img src="./ror.png" id="spring-logo" alt=""></img></div>
                                  <div className="icon"><img src="./react.png" id="git-logo" alt=""></img></div>
                                  <div className="icon"><img src="./docker.png" id="git-logo" alt=""></img></div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-info">
                                <span>April 1999 - March 2013</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">

                            <div>
                            <a href="https://www.dpspatna.com">
                            <img src="./DPS.png" alt=""></img>
                            </a>
                            </div>
                                <h3 className="timeline-title">Delhi Public School, Patna</h3>
                                <p>High School</p>
                            </div>
                        </li>
                        <li className="timeline-item period">
                            <div className="timeline-info"></div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <img className="born" src="./Newborn.png" alt=""></img>
                                <h2 className="timeline-title">1995</h2>
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
