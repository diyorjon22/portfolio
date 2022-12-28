import React from 'react';
import './header.css'
import { Link } from 'react-router-dom'
import { TiThMenu } from 'react-icons/ti';
import { Drawer } from '@mui/material';
import { AiFillHome } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { FcAbout } from 'react-icons/fc';
import { MdWork } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';

const Header = () => {
    const [modal,setModal] = React.useState(false)
    return (
        <header className='header'>
            <div className='container'>
            <nav className='site-nav'>
            <p className='Logo'>DIYOR</p>
            <ul className='ul'>
                <Link className='none' to='/'>Home</Link>
                <Link className='none' to='/about'>About</Link>
                <Link className='none' to='/skils'>Skils</Link>
                <Link className='none' to='/work'>Work</Link>
                <Link className='none' to='/contact'>Contact</Link>
                <TiThMenu onClick={() => setModal(!modal)} className='menu'/>
                <Drawer anchor='right' open={modal} onClose={() => setModal(false)}>
                    <div className='modal-content'>
                    <button className='closeModal' onClick={() => setModal(false)}>x</button>
                    <p className='Logo-modal'>DIYOR</p>
                    <div className='home_mod'>
                        <p><AiFillHome/></p>
                        <Link className='modal-content__link' to='/'>Home</Link>
                    </div>
                    <div className='home_mod'>
                        <p><FcAbout/></p>
                        <Link className='modal-content__link ' to='/about'>About</Link>
                    </div>
                    <div className='home_mod'>
                        <p><GiSkills/></p>
                        <Link className='modal-content__link ' to='/skils'>Skills</Link>
                    </div>
                    <div className='home_mod'>
                        <p><MdWork/></p>
                        <Link className='modal-content__link ' to='/work'>Work</Link>
                    </div>
                    <div className='home_mod'>
                        <p><IoMdContact/></p>
                        <Link className='modal-content__link ' to='/contact'>Contact</Link>
                    </div>
                    </div>
                </Drawer>
            </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header;