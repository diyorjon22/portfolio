import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Book from '../../assets/img/bookshelter.png'
import Myteam from '../../assets/img/photo_2022-12-23_20-26-15.jpg'
import Finsw from '../../assets/img/finswet.jpg'
import Todo from '../../assets/img/todo.jpg'
import Richard from '../../assets/img/richard.jpg'
import Cofee from '../../assets/img/cofee.jpg'
import './work.css'



const Work = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1400,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint:1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint:600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },


        ]
    };
    return (
        <div className='site-slick'>
            <div className='container'>
                <div className='slick'>
                    <div className='slick-titles'>
                        <p className='slick-titles__p'>My Works</p>
                    </div>
                        <Slider className='slider' {...settings}>
                            <a href="https://book-shelterr.netlify.app/" className='link'> <img className='img1' src={Book} alt="img" /></a>
                            <a className='link' href="https://my-proect.netlify.app/"><img className='img1' src={Myteam} alt="img" /></a>
                            <a className='link' href="https://finswet.netlify.app/"> <img className='img1' src={Finsw} alt="img" /></a>
                            <a className='link' href="https://todoss-react.netlify.app/"> <img className='img1' src={Todo} alt="img" /></a>
                            <a className='link' href="https://richard-react.netlify.app/"> <img className='img1' src={Richard} alt="img" /></a>
                            <a className='link' href="https://coferoasters.netlify.app/"><img className='img1' src={Cofee} alt="img" /></a>
                        </Slider>

                </div>
            </div>
        </div>
    );
};

export default Work;


