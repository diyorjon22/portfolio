import React from 'react';
import Header from '../../components/home_header/header';
import Hero from '../../components/home_hero/hero';
import About from '../../components/home_about/about';
import Skils from '../../components/home_skils/skils';
import Work from '../../components/home_work/work';
import Contact from '../../components/home_contact/contact';
import Footer from '../../components/home_footer/footer';

const Home = () => {
    return (
        <>
        <Header/>
        <Hero/>
        <About/>
        <Skils/>
        <Work/>
        <Contact/>
        <Footer/>
        </>
    );
};

export default Home;