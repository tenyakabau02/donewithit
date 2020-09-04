import React from 'react';
import {FaHeart} from 'react-icons/fa'

function Footer() {
    return (
      <>
      <section className="footer">
        <div className="container">
          <hr />
            <p className="copyright"> Made with <FaHeart className = "footer-icon"/> by DoneWithIt</p>
        </div>
      </section>
      </>
    );
  }

export default Footer;
