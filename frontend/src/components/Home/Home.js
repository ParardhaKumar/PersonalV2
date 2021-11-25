import React,{Component} from 'react';
import Typewriter from 'typewriter-effect';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import * as Content from './Content';
import Timeline from '../Timeline/Timeline';
import SocialIcons from '../SocialIcons/SocialIcons';
import './Home.css';

class Home extends Component{

  constructor(){
    super();
  }

  componentDidMount() {
  }

  render(){
    return (
      <div>
        <header class="header flex">
          <div class="header__overlay has-fade" id="header"></div>

          <nav class="navbar flex">
            <div class="toggle-menu hide-for-desktop" role="button" tabindex="0" aria-label="toggleMenu">
              <span class="toggle-menu__item"></span>
              <span class="toggle-menu__item"></span>
              <span class="toggle-menu__item"></span>
            </div>

            <ul class="menu flex has-fade">
              <li class="menu__item">
                <a href="#" class="menu__link">Resume</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Blog</a>
              </li>
            </ul>
          </nav>
        </header>

        <section class="hero container flex">
          <div class="hero__image">
          </div>
          <div class="hero__text">
            <h1 class="hero__title">
              <Typewriter
                options={{
                  strings: [Content.heading],
                  autoStart: true,
                  loop: true,
                  pauseFor: 10000,
                  cursor: '_'
                }}
                />
            </h1>
            <p class="hero__description">
              {Content.introduction}
            </p>
            <hr></hr>
            {/*<a href="#" class="btn btn--main">Download Resume</a>*/}
            <SocialIcons />
          </div>
        </section>
        <div class="scroll">
          <a href="#recent-projects">
            <img src="./scroll-down.gif" id="scroll-gif"></img>
          </a>
        </div>
        {
          // <section class="recent-posts">
          // <div class="container">
          // <header class="recent-posts__header flex">
          // <h2 class="recent-posts__title">Recent posts</h2>
          // <a href="#" class="recent-posts__link">View all</a>
          // </header>
          //
          // <div class="posts-area flex">
          // <div class="post-card">
          // <h3 class="post-card__title">Making a design system from scratch</h3>
          //
          // <div class="post-card__info">
          // <span class="post-card__date">12 Feb 2020</span>
          // <span class="post-card__tags">Design, Pattern</span>
          // </div>
          //
          // <p class="post-card__description">
          // Amet minim mollit non deserunt ullamco
          // est sit aliqua dolor do amet sint. Velit officia consequat
          // duis enim velit mollit. Exercitation veniam
          // consequat sunt nostrud amet.
          // </p>
          // </div>
          //
          // <div class="post-card">
          // <h4 class="post-card__title">Creating pixel perfect
          // icons in Figma</h4>
          //
          // <div class="post-card__info">
          // <span class="post-card__date">12 Feb 2020</span>
          // <span class="post-card__tags">Design, Pattern</span>
          // </div>
          //
          // <p class="post-card__description">
          // Amet minim mollit non deserunt ullamco
          // est sit aliqua dolor do amet sint. Velit officia consequat
          // duis enim velit mollit. Exercitation veniam
          // consequat sunt nostrud amet.
          // </p>
          // </div>
          // </div>
          // </div>
          // </section>
        }

        <section class="hero container flex" id="recent-projects">
          <div class="container">
            <header class="featured__header flex">
              <div>
                <h2 class="featured__title">Recent Projects</h2>
              </div>

            </header>
            <br></br>
            <Carousel>
              <div>

                <div class="featured-cards-area flex">
                  <div class="featured-card flex">
                    <div class="featured-card__image featured-card__image--1"></div>

                    <div class="featured-card__text">
                      <h1 class="featured-card__title"> <a href="http://dumbgamer.com"> Dumb Gamer </a> </h1>
                      <div class="featured-card__info flex">
                        <span class="featured-card__data-year">2020-21</span>
                        <span class="featured-card__tags">Social Gaming Platform</span>
                      </div>
                      <p class="featured-card__description">
                        Dumb Gamer is a platform to play social games with friends and family. Currently the platform serves Mafia aka One Night Ultimate Werewolf, and in the process of onboarding new games soon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="featured-card flex">
                  <div class="featured-card__image featured-card__image--2"></div>

                  <div class="featured-card__text">
                    <h1 class="featured-card__title"><a href="http://indiafightscorona.herokuapp.com/">India Fights Corona </a></h1>
                    <div class="featured-card__info flex">
                      <span class="featured-card__data-year">2020</span>
                      <span class="featured-card__tags">Corona Helpboard</span>
                    </div>
                    <p class="featured-card__description">
                      India Fights Corona is a dashboard intented to create a unified platform for the country and to report any emergency during the first ever and sudden lockdown of the country.
                    </p>
                  </div>
                </div>

              </div>
            </Carousel>

          </div>
        </section>

        <section class="featured">
          <div class="container">
            <header class="featured__header flex">
              <h2 class="featured__title">Education & Experience Timeline</h2>
            </header>
            <br></br>
            <Timeline/>
          </div>
        </section>

        <footer class="footer">
          <a href="#hero"><div>Back to Top</div></a>
          <div class="footer__text">
            <hr></hr>
            <p class="footer__paragraph">Thanks for visiting my personal website. Please do reach out to me on any of my social media handles for any query.</p>
          </div>
        </footer>

      </div>
    );

  }

}

export default Home;
