import React from 'react';
import {logo} from '../logo.svg';

function Footer() {
    return (
      <>
      <section class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <img src={logo} class="footer-logo" alt="Company Logo">
                <p>A lifetime experience adventure with us at best and low price, it's our duty.We provide quality services with luxury travel experience.We do mostly private customised trips to explore more with best possible satisfaction (arrival to departure).</p>
            </div>
            <div class="col-md-3">
               <h4>Features</h4>
               <p>Deals & Offers</p>
               <p>Customers Reviews</p>
               <p>Promotion & Discounts</p>
            </div>
            <div class="col-md-3">
              <h4>Contact Us</h4>
              <p><i class="fas fa-phone-square"></i>+263 774504292</p>
              <p><i class="fas fa-envelope"></i>hello@DoneWithIt.com</p>
              <p><i class="fas fa-home"></i>123 Ann Srydio , XYZ City</p>
            </div>
            <div class="col-md-3">
              <h4>Follow Us on</h4>
              <p><i class="fas fa-twitter"></i>Twitter</p>
              <p><i class="fas fa-instagram"></i>Instagram</p>
              <p><i class="fas fa-facebook-official"></i>Facebook</p>
            </div>


          </div>
          <hr>
            <p class="copyright"> Made with <i class="fas fa-heart"></i> by DoneWithIt</p>
        </div>
      </section>
      </>
    );
  }

export default Footer;
