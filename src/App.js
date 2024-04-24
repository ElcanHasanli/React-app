import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="app-main">
      <div className='app'>
        <h1>Logo</h1>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Agent</li>
          <li>About</li>
          <li>Listing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="img">
        <h1>let us take you <br></br> further than <br></br> you've ever been.</h1>
      </div>
      <div className="footer">
        <div className="firstSide-footer">
          <h1 className='logo'>Logo</h1>
          <p>c 2022 Monkigo, All rights reserved.</p>
          <div className="icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
        <div className="secondSide-footer">
          <h1>Subscribe</h1>
          <p>Be the first one to hear about <br></br> new events and etc.</p>
          <div className='subs'>
            <button className='email'>Email address</button>
            <button className='subscribe'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;