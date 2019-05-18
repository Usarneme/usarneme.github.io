import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './Projects.css'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <section id="academic-projects">
      <div 
        className="container projects-container academic" 
        style={{ 
          display: `flex`, 
          flexDirection: `column`,
          alignItems: `center`,
          alignContent: `center`,
        }}>

        <a href="https://ididnotknowicoulddothat.github.io/public/sites/task_list_app/build/index.html" target="_blank" rel="noopener noreferrer" className="project card task">
          <header>
              <h4>Task List</h4>
              <hr />
              <p><small>for not forgetting</small></p>
          </header>
          <img className="portfolio-image" src="public/img/tasklist.png" alt="The Task List app." />
          <div className="notes">
              A task list application you can use for grocery lists or generally getting your life together. Available to download as a Progressive Web App to run on almost all devices!
          </div>
        </a>
        <a href="http://js-drumkit.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card drumkit">
          <header>
              <h4>Keyboard Drumkit</h4>
              <hr />
              <p><small>you're a producer</small></p>
          </header>
          <img className="portfolio-image" src="public/img/jsdrumkit.png" alt="The Keyboard Drumkit." />
          <div className="notes">
            A simple drumkit with tom, high hat, open hat, kick, ride, snare, tink, clap and boom sounds mapped to keyboard buttons. Music production has never been so easy!
          </div>
        </a>

        <a href="https://ididnotknowicoulddothat.github.io/public/sites/ttt/build/index.html" target="_blank" rel="noopener noreferrer" className="project card ttt">
          <header>
              <h4>Tic Tac Toe Game</h4>
              <hr />
              <p><small>for Joshua</small></p>
          </header>
          <img className="portfolio-image" src="public/img/tictactoe.png" alt="The Tic Tac Toe app." />
          <div className="notes">
              Sometimes the only way to win is to not play the game. But give this fun tic tac toe game a try anyway.
          </div>
        </a>

        <a href="https://ididnotknowicoulddothat.github.io/public/sites/jscalc/" target="_blank" rel="noopener noreferrer" className="project card calc">
          <header>
              <h4>Calculator</h4>
              <hr />
              <p><small>for the maths</small></p>
          </header>
          <img className="portfolio-image" src="public/img/calculator.png" alt="The Calculator app." />
          <div className="notes">
              A four function + - * / calculator. Available to download as a Progressive Web Application! You can save this as a standalone application on your phone/tablet/ChromeOS or desktop PC.
          </div>
        </a>

        <a href="http://js-analog-clock.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card clock">
          <header>
              <h4>Analog Clock</h4>
              <hr />
              <p><small>technically still digital</small></p>
          </header>
          <img className="portfolio-image" src="public/img/analogclock.png" alt="The Analog Clock." />
          <div className="notes">
            A digital analog clock. Or rather an analog digital clock. Simple but sort of hypnotic due to cubic-bezier transitions of the clock's hands.
          </div>
        </a>

        <a href="https://ididnotknowicoulddothat.github.io/public/sites/meditations/" target="_blank" rel="noopener noreferrer" className="project card article">
          <header>
              <h4>Meditations</h4>
              <hr />
              <p><small>for reading</small></p>
          </header>
          <img className="portfolio-image" src="public/img/meditations.png" alt="The Meditations app." />
          <div className="notes">
              Read a random passage from Marcus Aurelius' Meditations.
          </div>
        </a>

        <a href="https://usarneme-flashcards.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card flashcards">
          <header>
              <h4>Flashcards</h4>
              <hr />
              <p><small>for learning</small></p>
          </header>
          <img className="portfolio-image" src="public/img/flashcards.png" alt="The Flashcards app." />
          <div className="notes">
              A full-stack NodeJS (Express) + ReactJS flashcard application.
          </div>
        </a>

        <a href="https://ididnotknowicoulddothat.github.io/public/sites/med_mad/" target="_blank" rel="noopener noreferrer" className="project card meditations">
          <header>
              <h4>Stoic Madlib Game</h4>
              <hr />
              <p><small>for Marcus</small></p>
          </header>
          <img className="portfolio-image" src="public/img/madlib.png" alt="The Stoic Madlib app." />
          <div className="notes">
              A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
          </div>
        </a>


        <a href="https://ididnotknowicoulddothat.github.io/public/sites/webcam_artist" target="_blank" rel="noopener noreferrer" className="project card meditations">
          <header>
              <h4>Webcam Artist</h4>
              <hr />
              <p><small>green screen selfies</small></p>
          </header>
          <img className="portfolio-image" src="public/img/madlib.png" alt="The Stoic Madlib app." />
          <div className="notes">
              A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
          </div>
        </a>

        <a href="http://rrspa.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card meditations">
          <header>
              <h4>Single Page Application Built on React Router (v4)</h4>
              <hr />
              <p><small>hey you didn't really change pages</small></p>
          </header>
          <img className="portfolio-image" src="public/img/madlib.png" alt="The Stoic Madlib app." />
          <div className="notes">
              A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
          </div>
        </a>

        <a href="https://gifsearch4.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card meditations">
          <header>
              <h4>Gif Search</h4>
              <hr />
              <p><small>search up to 20 gifs per hour!</small></p>
          </header>
          <img className="portfolio-image" src="public/img/madlib.png" alt="The Stoic Madlib app." />
          <div className="notes">
              A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
          </div>
        </a>

        <a href="http://yoon.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card meditations">
          <header>
              <h4>Positive Affirmations & Self Care Activities</h4>
              <hr />
              <p><small>treat yourself well</small></p>
          </header>
          <img className="portfolio-image" src="public/img/madlib.png" alt="The Stoic Madlib app." />
          <div className="notes">
              A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
          </div>
        </a>

        <a href="http://pomo-doro.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card meditations">
          <header>
              <h4>Pomodoro</h4>
              <hr />
              <p><small>what was I doing again?</small></p>
          </header>
          <img className="portfolio-image" src="public/img/madlib.png" alt="The Stoic Madlib app." />
          <div className="notes">
              A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
          </div>
        </a>

        <a href="https://hero5-run.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card meditations">
          <header>
              <h4>Take Note</h4>
              <hr />
              <p><small>don't you forget about me</small></p>
          </header>
          <img className="portfolio-image" src="public/img/madlib.png" alt="The Stoic Madlib app." />
          <div className="notes">
              A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
          </div>
        </a>
        <a href="https://usarneme-socket-chat.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card meditations">
          <header>
              <h4>Socket Chat</h4>
              <hr />
              <p><small>talk about more than just wrenches</small></p>
          </header>
          <img className="portfolio-image" src="public/img/madlib.png" alt="The Stoic Madlib app." />
          <div className="notes">
              A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
          </div>
        </a>

        <a href="https://ididnotknowicoulddothat.github.io/public/sites/compass/" target="_blank" rel="noopener noreferrer" className="project card meditations">
          <header>
              <h4>Compass and Speedometer</h4>
              <hr />
              <p><small>not useful for desktops</small></p>
          </header>
          <img className="portfolio-image" src="public/img/madlib.png" alt="The Stoic Madlib app." />
          <div className="notes">
              A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
          </div>
        </a>  

      </div>
    </section>
  </Layout>
)

export default Projects
