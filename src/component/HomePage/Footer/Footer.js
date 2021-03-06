import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-bootstrap';
import './Footer.css';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="footer row">
                <div className="col-md-3">
                    <h1>POWER <span style={{ color: 'yellow' }}>X</span></h1>
                </div>
                <div className="col-md-2">
                    <p style={{ fontWeight: '700' }}>Need Help?</p>
                    <a className="color-change" href="">Help Center</a> <br></br><br></br>
                    <a className="color-change" href="">Email Support</a><br></br><br></br>
                    <a className="color-change" href="">Live Chat</a><br></br><br></br>
                    <a className="color-change" href="">Gift Certificates</a><br></br><br></br>
                    <a className="color-change" href="">Send Us Feedback</a><br></br><br></br>
                </div>
                <div className="col-md-2">
                    <p style={{ fontWeight: '700' }}>Digital Resources</p>
                    <a className="color-change" href="">Articles</a> <br></br><br></br>
                    <a className="color-change" href="">E-Books</a><br></br><br></br>
                </div>
                <div className="col-md-2">
                    <p style={{ fontWeight: '700' }}>Connect With Us</p>

                    <FontAwesomeIcon icon={faYoutube} size="lg" /> {`  `}
                    <FontAwesomeIcon icon={faFacebook} size="lg" />{` `}
                    <FontAwesomeIcon icon={faInstagram} size="lg" />{` `}
                    <FontAwesomeIcon icon={faTwitter} size="lg" />{` `}
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />{` `}

                </div>
                <div className="col-md-3">
                    <p style={{ fontWeight: '700' }}>Join Our Newsletter</p>
                    <p>Get exclusive news, feature, and updates from The Shredder Weight Loss Academy </p>
                </div>

            </div>

        </div>
    );
};

export default Footer;