import React from 'react';
import './contact.css'
import { TiLocation } from "react-icons/ti";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";


const Contact = () => {
    return (
        <div className='site-contact'>
            <div className='container'>
                <div className='boks'>
                <div className='title'>
                    <p className='contact-p'>Contact Me</p>
                </div>
                <div className='contentt'>
                    <div className='roww'>
                        <div className='cardd reveal'>
                            <div className='contact-icon'>
                                <p><TiLocation/></p>
                            </div>
                            <div className='info'>
                                <h3>Adress</h3>
                                <span>Tashkent City 14 house</span>
                            </div>
                        </div>
                        <div className='cardd reveal'>
                            <div className='contact-icon'>
                                <p><AiFillPhone/></p>
                            </div>
                            <div className='info'>
                                <h3>Phone</h3>
                                <span>99 000 77 03</span>
                            </div>
                        </div>
                        <div className='cardd reveal'>
                            <div className='contact-icon'>
                                <p><MdEmail/></p>
                            </div>
                            <div className='info'>
                                <h3>Email Adress</h3>
                                <span>xoldiyorjon22@gmail.com</span>
                            </div>
                        </div>
                        <div className='cardd reveal'>
                            <div className='contact-icon'>
                                <p><RiGlobalLine/></p>
                            </div>
                            <div className='info'>
                                <h3>Website</h3>
                                <span>Portfoliomy.netlify.app</span>
                            </div>
                        </div>
                    </div>
                    <div className='roww'>
                        <div className='contact-form'>
                            <p>Send Message</p>
                            <div className='input-box'>
                                <input type="text" placeholder='Name' />
                            </div>
                            <div className='input-box'>
                                <input type="Email" placeholder='Email' />
                            </div>
                            <div className='input-box'>
                                <textarea rows='8' cols='80'>Message</textarea>
                            </div>
                            <div className='input-box'>
                                <button className='bitien'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;