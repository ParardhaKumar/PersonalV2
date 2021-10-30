import { BrowserRouter, Route, Switch} from 'react-router-dom';
import * as Content from './Content';
import './App.css';


function App() {
  return (
    <>
    <header class="header flex">
    <div class="header__overlay has-fade"></div>

    <nav class="navbar flex">
    <div class="toggle-menu hide-for-desktop" role="button" tabindex="0" aria-label="toggleMenu">
    <span class="toggle-menu__item"></span>
    <span class="toggle-menu__item"></span>
    <span class="toggle-menu__item"></span>
    </div>

    <ul class="menu flex has-fade">
    <li class="menu__item">
    <a href="#" class="menu__link">Blog</a>
    </li>
    <li class="menu__item">
    <a href="#" class="menu__link">Contact</a>
    </li>
    </ul>
    </nav>
    </header>

    <section class="hero container flex">
    <div class="hero__image"></div>

    <div class="hero__text">
    <h1 class="hero__title">{Content.heading}</h1>
    <p class="hero__description">
    {Content.introduction}
    </p>
    <hr></hr>

    {/*<a href="#" class="btn btn--main">Download Resume</a>*/}
    </div>
    </section>

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

    <section class="featured">
    <div class="container">
    <header class="featured__header flex">
    <h2 class="featured__title">Recent Projects</h2>
    </header>

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
    </div>
    </section>

    <footer class="footer">
    <div class="footer__links flex">
    <a href="#" class="footer__link flex"><i class='bx bxl-facebook-square'></i></a>
    <a href="#" class="footer__link flex"><i class='bx bxl-instagram' ></i></a>
    <a href="#" class="footer__link flex"><i class='bx bxl-twitter' ></i></a>
    <a href="#" class="footer__link flex"><i class='bx bxl-linkedin'></i></a>
    </div>
    <div class="footer__text">
    <hr></hr>
    <p class="footer__paragraph">Thanks for visiting my personal website. Made with love using React</p>
    </div>
    </footer>

    </>
  );
}

export default App;
