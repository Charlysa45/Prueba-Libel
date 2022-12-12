import React from 'react'
import {motion} from 'framer-motion'

import EnterpreIcon from '../../assets/icons/Enterpreneus.png'
import CapitalMarketsIcon from '../../assets/icons/CapitalMarkets.png'
import BussinessPlanIcon from '../../assets/icons/BussinessPlan.png'
import StartupsIcon from '../../assets/icons/Startups.png'

import './Home.css'

const Home = () => {
  return (
    <>
        <section className='services my-5'>
            <div className="text-center">
                <small className='text-muted'>WE HELP INNOVATIVE STARTUPS TO FIND AND FIX WEAK POINTS AND LAUNCH THE PRODUCT</small>
                <h2 className='font-purple fw-bold'>Special outstanding service for startups</h2>
            </div>

            <div className="services-cards mt-5">
                <motion.article whileHover={{scale: 1.1, borderBottom: "5px solid #0d6efd"}}  className='services-cards-card p-3 text-center'>
                    <img src={EnterpreIcon} alt="Enterpreneus-icon" className='card-img-top' />
                    <div className='services-cards-card-text text-center mx-auto'>
                        <p className='fw-bold mt-3 font-purple'>Enterpreneurs</p>
                        <p>We work with ecosystem leaders, corporations and startups worldwide</p>
                    </div>
                </motion.article>
                <motion.article whileHover={{scale: 1.1, borderBottom: "5px solid #0d6efd"}} className='services-cards-card p-3 text-center'>
                    <img src={CapitalMarketsIcon} alt="Capital-Markets-icon" className='card-img-top' />
                    <div className="services-cards-card-text text-center mx-auto">
                        <p className='fw-bold mt-3 font-purple'>Capital Markets</p>
                        <p>We work with ecosystem leaders, corporations and startups worldwide</p>
                    </div>
                </motion.article>
                <motion.article whileHover={{scale: 1.1, borderBottom: "5px solid #0d6efd"}} className='services-cards-card p-3 text-center'>
                    <img src={BussinessPlanIcon} alt="Bussiness-Plan-icon" className='card-img-top' />
                    <div className="services-cards-card-text text-center mx-auto">
                        <p className='fw-bold mt-3 font-purple'>Bussiness Plan</p>
                        <p>We work with ecosystem leaders, corporations and startups worldwide</p>
                    </div>
                </motion.article>
                <motion.article whileHover={{scale: 1.1, borderBottom: "5px solid #0d6efd"}} className='services-cards-card p-3 text-center'>
                    <img src={StartupsIcon} alt="Startups-icon" className='card-img-top' />
                    <div className="services-cards-card-text text-center mx-auto">
                        <p className='fw-bold mt-3 font-purple'>Startups</p>
                        <p>We work with ecosystem leaders, corporations and startups worldwide</p>
                    </div>
                </motion.article>
            </div>
        </section>
        <section className='about my-5 border-top border-gray'>
            <div className='d-flex justify-content-around align-items-center pt-5'>
                <div>
                    <h2 className='font-purple fw-bold'>All startups need to make their business work</h2>
                    <p className='font-purple'>We work with a huge pool of investors, venture capital firms and business angels</p>
                </div>
                <div>
                    <motion.button whileHover={{scale: 1.1}} className='about-button text-primary px-4 py-2'>Get Started</motion.button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home