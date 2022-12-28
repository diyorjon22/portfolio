import React from 'react';
import My_img from '../../assets/img/photo_2022-12-22_21-27-13.jpg'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {return (
        <section className='site-section' id='about'>
            <div className='container'>
                <div className='about'>
                    <h3 className='about-title'>About Me</h3>
                    <div className='card'>
                        <div className='my-img'>
                            <img src={My_img} alt="" />
                        </div>
                        <div className='About-us'>
                            <h4>Hey there! I'm Diyor Xolmurodov</h4>
                            <p>Officiis, eos pariatur esse velit veritatis reiciendis cum quod possimus quas? Modi adipisci odit voluptatem tempora error perferendis quisquam, dolores iure, ullam id nam quaerat dolor incidunt, ratione aliquam deserunt eaque explicabo nostrum quo veniam expedita distinctio dolorem. Aspernatur consectetur eum vitae nobis.


                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis ullam deserunt debitis. Rerum necessitatibus accusantium, ipsa, officiis, eos pariatur esse velit veritatis reiciendis cum quod possimus quas? Modi adipisci odit voluptatem tempora error perferendis quisquam, dolores iure, ullam id nam</p>
                            <Link className='about-btn'>See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
};

export default About;