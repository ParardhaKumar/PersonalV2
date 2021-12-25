import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typewriter } from 'react-simple-typewriter';
import * as Content from './Content';
import Timeline from '../Timeline/Timeline';
import SocialIcons from '../SocialIcons/SocialIcons';
import Header from '../Header/Header';
import './Home.css';

class Home extends Component{

  componentDidMount() {
  }

  render(){
    return (
      <div>
        <header className="header flex">
          <Header />
        </header>

        <section className="hero container flex" id="landing">
          <div className="hero__image">
          </div>
          <div className="hero__text">
            <h1 className="hero__title">
              {Content.heading}	&#128075;
            </h1>
            <p className="hero__description">
              {Content.i}<Typewriter
                words={Content.introduction}
                loop={0}
                typeSpeed={50}
                deleteSpeed={10} />
            </p>
            <hr></hr>
            {/*<a href="#" className="btn btn--main">Download Resume</a>*/}
            <SocialIcons />
          </div>
        </section>
        <div className="scroll">
          <a href="#recent-projects">
            <img src="./scroll-down.gif" id="scroll-gif" alt=""></img>
          </a>
        </div>
        {
          // <section className="recent-posts">
          // <div className="container">
          // <header className="recent-posts__header flex">
          // <h2 className="recent-posts__title">Recent posts</h2>
          // <a href="#" className="recent-posts__link">View all</a>
          // </header>
          //
          // <div className="posts-area flex">
          // <div className="post-oud">
          // <h3 className="post-card__title">Making a design system from scratch</h3>
          //
          // <div className="post-card__info">
          // <span className="post-card__date">12 Feb 2020</span>
          // <span className="post-card__tags">Design, Pattern</span>
          // </div>
          //
          // <p className="post-card__description">
          // Amet minim mollit non deserunt ullamco
          // est sit aliqua dolor do amet sint. Velit officia consequat
          // duis enim velit mollit. Exercitation veniam
          // consequat sunt nostrud amet.
          // </p>
          // </div>
          //
          // <div className="post-card">
          // <h4 className="post-card__title">Creating pixel perfect
          // icons in Figma</h4>
          //
          // <div className="post-card__info">
          // <span className="post-card__date">12 Feb 2020</span>
          // <span className="post-card__tags">Design, Pattern</span>
          // </div>
          //
          // <p className="post-card__description">
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

        <section className="hero container flex" id="recent-projects">
          <div className="container projects-container">
            <div className="featured__header flex">
              <div>
                <h2 className="featured__title">Recent Projects</h2>
                <hr></hr>
              </div>

            </div>
            <br></br>
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true}>
              <div>

                <div className="featured-cards-area flex">
                  <div className="featured-card flex">
                    <div className="featured-card__image featured-card__image--1"></div>

                    <div className="featured-card__text">
                      <h1 className="featured-card__title"> <a href="http://dumbgamer.com"> Dumb Gamer </a> </h1>
                      <div className="featured-card__info flex">
                        <span className="featured-card__data-year">2020 - Present</span>
                        <span className="featured-card__tags">Social Gaming Platform</span>
                      </div>
                      <p className="featured-card__description">
                        Dumb Gamer is a platform to play social games with friends and family. Currently the platform serves Mafia aka One Night Ultimate Werewolf, and in the process of onboarding new games soon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="featured-card flex">
                  <div className="featured-card__image featured-card__image--2"></div>

                  <div className="featured-card__text">
                    <h1 className="featured-card__title"><a href="http://indiafightscorona.herokuapp.com/">India Fights Corona </a></h1>
                    <div className="featured-card__info flex">
                      <span className="featured-card__data-year">2020</span>
                      <span className="featured-card__tags">Corona Helpboard</span>
                    </div>
                    <p className="featured-card__description">
                      India Fights Corona is a dashboard intented to create a unified platform for the NGOs in India to collaborate and work under a single umbrella to handle reported emergencies during the sudden lockdown of the country due to the COVID-19 Pademic.
                    </p>
                  </div>
                </div>

              </div>
            </Carousel>

          </div>
        </section>

        <section className="featured">
          <div className="container">
            <header className="featured__header flex">
              <h2 className="featured__title">Timeline</h2>
              <hr></hr>
            </header>
            <br></br>
            <Timeline/>
          </div>
        </section>

        <footer className="footer">
          <a href="#landing"><div>Back to Top</div></a>
          <div className="footer__text">
            <hr></hr>
            <p className="footer__paragraph">Thanks for visiting my personal website. Please do reach out to me on any of my social media handles for any query.</p>
          </div>
        </footer>

      </div>
    );

  }

}

export default Home;
