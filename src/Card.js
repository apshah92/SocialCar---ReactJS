import React from 'react';
import Logo from './components/logo';
import Header from './components/header';
import LinkedImage from './components/linkedImage';
import Footer from './components/footer';
import logoImage from './images/logo.jpg';
import linkImage from './images/linkImage.jpg';
import './style/card.css';

function Card() {
  return (
    <div className="card">
      <div className="top-bar">
        <Logo path={logoImage} className="logo"></Logo>
        <Header displayName="Arpan Shah" userName="apShah" postDate="August 12" className="header">
            Practicing React First Time <br/>
            author: @arpanshah
        </Header>
      </div>
      <div className="contentPan">
        <LinkedImage link="http://www.arpanshah.tk" image={linkImage} className="link-image">
            <div className="image-text">
              Learning React is fun. <br/> This is my first ever React App. Click to check out my website.
            </div>           
        </LinkedImage>
      </div>   
      <div className="footer">
        <Footer />              
      </div>      
    </div>
  );
}

export default Card;
