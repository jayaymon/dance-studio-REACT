import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-3 col-md-2 align-self-center">
                        <Link to='/home'><img src="assets/images/logo.png" alt="dance studio logo" className="img-fluid" /></Link>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Contact</h5>
                        <a role="button" className="btn btn-secondary mt-1" href="tel:+12035551234" data-toggle="tooltip" title="Click here to call our office front desk"><i className="fa fa-phone" /> 1-206-555-1234</a>
                        <a role="button" className="btn btn-secondary mt-1" href="mailto:dancers@stepbystep.co"><i className="fa fa-envelope-o" /> dancers@stepbystep.co</a>
                    </div>
                    <div className="col text-center">
                        <h5>Studio Hours</h5>
                        <p>Monday-Friday 12pm-3pm</p>
                        <p>Closed on weekends</p>
                    </div>
                    <div className="col-sm-3 offset-md-1 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-twitter btn-social-icon mt-1 px-md-4" href="http://twitter.com/" data-toggle="tooltip" title="Visit our Twitter homepage"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google mt-1 px-md-4" href="http://youtube.com/" data-toggle="tooltip" title="Visit our Youtube homepage"><i className="fa fa-youtube" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook mt-1 px-md-4" href="http://facebook.com/" data-toggle="tooltip" title="Visit our Facebook homepage"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-instagram mt-1 px-md-4" href="http://instagram.com/" data-toggle="tooltip" title="Visit our Instagram homepage"><i className="fa fa-instagram" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;