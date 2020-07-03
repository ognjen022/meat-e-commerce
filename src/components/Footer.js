import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6 className="header-underline">About</h6>
              <p className="text-justify">
                <br />
                <span>Address: Isabellalei 7, 2018 Antwerpen, Belgium</span>
                <br />
                <br />
                <span>Email: info@company.com</span>
                <br />
                <br />
                <span>Phone Number: +3232394189</span>
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Work Days</h6>
              <br />
              <ul className="footer-links">
                <li>Sunday: closed</li>
                <li>Monday: 09:00 - 19:00</li>
                <li>Tuesday: 09:00 - 19:00</li>
                <li>Wednesday: 09:00 - 19:00</li>
                <li>Thursday: 09:00 - 19:00</li>
                <li>Friday: 08:00 - 19:00</li>
                <li>Saturday: 10:00 - 13:00</li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <br />
              <ul className="footer-links">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by KBInvest.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <Link className="facebook" to="/">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="twitter" to="/">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link className="linkedin" to="/">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
