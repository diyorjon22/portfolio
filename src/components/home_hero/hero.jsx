import React from 'react';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import './hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container'>
                <div className='content'>
                    <h1>Hello, I'm <br/><span>Diyor Xolmurodov</span></h1>
                    <div className='animation'>
                        <h2>Web Developer</h2>
                        <h2>Software Enginer</h2>
                    </div>
                    <div className='div-btn'>
                        <Link className='btnn' to='/work'>See My Work</Link>
                        </div>
                    <div className='icons'>
                        <a className='icons-link' href='https://www.instagram.com/'><BsInstagram/></a>
                        <a className='icons-link' href='https://ru-ru.facebook.com/'><BsFacebook/></a>
                        <a className='icons-link' href='https://twitter.com/'><BsTwitter/></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;