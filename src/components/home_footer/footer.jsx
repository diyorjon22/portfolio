import React from 'react';
import './footer.css'
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='site-footer'>
            <div className='container'>
                <center>
                <div className='footer'>
                    <div className='footer-titles'>
                        <p>Diyor Xolmurodov</p>
                        <p>Software Enginer end Web Developer</p>
                    </div>
                    <div className='footer-icons'>
                        <p><BsInstagram/></p>
                        <p><BsTwitter/></p>
                        <p><BsFacebook/></p>
                    </div>
                </div>
                </center>
            </div>
        </footer>
    );
};

export default Footer;