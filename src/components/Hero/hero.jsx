import React from 'react'
import './hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="flexCenter paddings innerWidth hero-container">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <motion.h1 initial={{y:"2rem",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:2,type:"spring"}}>
                        Discover <br />
                        Most Suitable <br />
                        Property
                    </motion.h1>
                </div>
                <div className="flexColStart hero-dis">
                    <span>Find a variety of properties that suit you very easily</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className="search-bar">
                    <HiLocationMarker color="var(--blue)" size={27}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4} /><span>+</span>
                            </span>
                        <span>
                            Premium Products
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1800} end={2000} duration={4} /><span>+</span>
                        </span>
                        <span>
                            Happy Customers
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28} duration={4} /><span>+</span>
                        </span>
                        <span>
                            Awards
                        </span>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-right">
                <motion.div initial={{x:"7rem",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:"spring"}} className="image-container">
                    <img src="./hero-image.png" alt="" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero