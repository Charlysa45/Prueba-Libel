import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaDribbble} from 'react-icons/fa'
import {BiCart, BiSearch} from 'react-icons/bi'
import {BsPlay} from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'

import {motion} from 'framer-motion'

import './Header.css'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg border-bottom border-light p-0">
            <div className="container">
                <div className="navbar-nav">
                    <p className="nav-link text-light border-start border-end border-light mb-0">+1 227 946 2700</p>
                    <p className="nav-link text-light border-end border-light mb-0">Help Desk</p>
                    <p className="nav-link text-light mb-0">Why Sway</p>
                </div>
                <div className="navbar-nav ms-auto">
                    <p className="nav-link text-light border-end border-light mb-0 ps-3 pe-3"><FaFacebookF/></p>
                    <p className="nav-link text-light border-end border-light mb-0 ps-3 pe-3"><FaTwitter/></p>
                    <p className="nav-link text-light border-end border-light mb-0 ps-3 pe-3"><FaInstagram/></p>
                    <p className="nav-link text-light border-end border-light mb-0 ps-3 pe-3"><FaDribbble/></p>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <p className="navbar-brand text-light">LIBEL ACADEMY</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <p className="nav-link text-light active mb-0" aria-current="page">Home <RiArrowDropDownLine/></p>
                        <p className="nav-link text-light mb-0">About</p>
                        <p className="nav-link text-light mb-0">Services</p>
                        <p className="nav-link text-light mb-0">Pricing</p>
                        <p className="nav-link text-light mb-0">Products</p>
                        <p className="nav-link text-light mb-0">News</p>
                        <p className="nav-link text-light mb-0">
                            <BiCart/>
                        </p>
                        <p className="nav-link text-light mb-0"><BiSearch/></p>
                        <motion.button whileHover={{scale: 1.1}} type="button" className="contact-btn text-primary">Contact Us</motion.button>
                    </div>
                </div>
            </div>
        </nav>

        <section className='banner py-5'>
            <div className="container row text-center mx-auto py-5" >
                <div className='col-lg-6 col-md-8 mx-auto'>
                    <h1 className='banner-title fw-bold text-white'>Empowering Startups</h1>
                    <small className='text-white'>Providing our clients with the strategic guidance to make the right technology and business decisions. We will help you develop the best operational processes for your startup.</small>
                    <motion.div whileHover={{scale: 1.1}} className='play-button bg-white rounded-circle my-5 d-flex align-items-center justify-content-center'>
                        <p className='fs-4 mb-0 d-flex align-items-center justify-content-center text-primary'><BsPlay/></p>
                    </motion.div>
                </div>
            </div>
        </section>

        <section>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
        </section>
    </header>
  )
}

export default Header