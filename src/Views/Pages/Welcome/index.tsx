import { Button } from '@mui/material'
import OneGoLogo from '../../../assets/img/1-goride-logo.png'
import NissanVanatteFront from '../../../assets/img/nissan-vanatte-front.jpg'
import NissanVanatteSide from '../../../assets//img/nissan-vanatte-side.jpg'

import SuzukiMiniBusFront from '../../../assets/img/suzuki-mini-bus-front.jpg'
import SuzukiMiniBusback from '../../../assets/img/suzuki-mini-bus-back.jpg'

import { motion } from "framer-motion"
import { Email, AppRegistration, Handshake, ChevronRight } from '@mui/icons-material'

export default function Welcome() {

    return (
        <>
            <div className="page-section hero-area">
                <div className="section-split">
                    <div className="hero-inro-area">
                        <h1 className='hero-area-intro-headline'>
                            VEHICLE
                            PARTNER<br />
                            PROPOSAL
                        </h1>
                        <p className="hero-area-intro-description">
                            Join the biggest campus and more ridesharing network <br /> with the largest active rider community.
                        </p>
                        <div className="space-between left">
                            <Button variant="contained" disableElevation className='primary-button' color="primary">
                                Sign up as a partner.
                            </Button>
                            <Button variant="contained" disableElevation className='primary-button' color="secondary">
                                Why 1GoRide?.
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="section-split">
                    <div className="hero-logo-container">
                        <motion.img
                            initial={{ opacity: 0, x: -1000 }}
                            animate={{ opacity: 1, x: 0 }}
                            src={OneGoLogo}
                            loading="lazy"
                            alt=""
                            className="one-go-logo hero-area" />
                    </div>
                </div>
            </div>

            <div className="page-section sectioning">
                <div className="section-split">
                    <div className="hero-inro-area">
                        <h2 className='h2-headline'>
                            Meet 1GoRide
                        </h2>
                        <p className="hero-area-intro-description">
                            1go is a campus ride-hailing brand committed to offering fast, cheap and
                            reliable rides with a top-notch in-ride experience to students in University
                            and Polytechnic campuses across Nigeria. We are currently operating in
                            the University of Ilorin, main campus with plans to expand to the Kwara
                            state university(KWASU) by September, 2024. <br /><br />
                            Hi, I am Isichei Michael Onochie, Head of marketing, 1go technologies Ltd
                            and I'm about to walk you through on the different investment options
                            available to you as a 1go vehicle partner.
                        </p>
                        <div className="space-between">
                            <Button variant="contained" disableElevation className='primary-button' color="primary">
                                Sign up as a partner.
                            </Button>

                        </div>
                    </div>
                </div>
                <div className="section-split">
                    <div className="hero-logo-container">
                        <motion.img
                            initial={{ opacity: 0, x: -1000 }}
                            animate={{ opacity: 1, x: 0 }}
                            src={OneGoLogo}
                            loading="lazy"
                            alt=""
                            className="one-go-logo hero-area" />
                    </div>
                </div>
            </div>

            <div className="page-section sectioning">
                <div className="section-split">
                    <div className="hero-inro-area">
                        <h2 className='h2-headline'>
                            1Go Vehicle Partnership
                        </h2>
                        <p className="hero-area-intro-description">
                            1go vehicle partners invest in the vehicles used by 1go for its operations.
                            1go vehicle partners ensure constant flow of vehicles into the
                            company(1go technologies Ltd) in exchange for a good ROI.
                        </p>

                        <div className="flexed-col">
                            <div className="flexed-row">
                                <motion.div className='flexed-img-wrap'>
                                    <img src={NissanVanatteFront} alt="" className="flexed-img" />
                                    <img src={NissanVanatteSide} alt="" className="flexed-img" />
                                </motion.div>
                                <motion.div className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Nissan Vanatte bus (Foreign used standard)</h3>
                                    <div className="space-between">
                                        <span>Model: </span>
                                        <span>2002 - 2011</span>
                                    </div>
                                    <div className="space-between">
                                        <span>Estimated price(Capital):</span>
                                        <span>NGN 4,100,000/$9,020</span>
                                    </div>
                                    <div className="space-between">
                                        <span>ROI:</span>
                                        <span>NGN 2,000,000/$4,400 P.A</span>
                                    </div>
                                    <div className="space-between">
                                        <span>Investment duration: </span>
                                        <span>Five (5) years</span>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="flexed-row">
                                <motion.div className='flexed-img-wrap'>
                                    <img src={SuzukiMiniBusFront} alt="" className="flexed-img" />
                                    <img src={SuzukiMiniBusback} alt="" className="flexed-img" />
                                </motion.div>
                                <motion.div className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Suzuki mini bus (korope) (Foreign used standard)</h3>
                                    <div className="space-between">
                                        <span>Model: </span>
                                        <span>2002 - 2011</span>
                                    </div>
                                    <div className="space-between">
                                        <span>Estimated price(Capital):</span>
                                        <span>NGN 2,200,000/$4,269</span>
                                    </div>
                                    <div className="space-between">
                                        <span>ROI:</span>
                                        <span>NGN 1,320,000/$1,610 P.A</span>
                                    </div>
                                    <div className="space-between">
                                        <span>Investment duration: </span>
                                        <span>Three(3) years</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="section-split">
                    <div className="hero-logo-container">
                        <motion.img
                            initial={{ opacity: 0, x: -1000 }}
                            animate={{ opacity: 1, x: 0 }}
                            src={OneGoLogo}
                            loading="lazy"
                            alt=""
                            className="one-go-logo hero-area" />
                    </div>
                </div> */}
            </div>

            <div className="page-section sectioning">
                <div className="section-split">
                    <div className="hero-inro-area">
                        <h2 className='h2-headline'>
                            How to become a vehicle partner
                        </h2>
                        <p className="hero-area-intro-description">
                            You can become a 1go vehicle partnerby following  the few steps below,<br />
                            carefully
                        </p>


                        <div className="flexed-col">
                            <div className="flexed-card">
                                <div className="space-between">
                                    <div className="icons-wrap">
                                        <Email style={{ fontSize: 40 }} />
                                    </div>
                                </div>
                                <motion.div className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Apply for partnership</h3>
                                    <p className="hero-area-intro-description">
                                        A potential 1go vehicle partner can apply by sending us a mail at&nbsp;
                                        <a href="mailto:info@1goexplore.com">info@1goexplore.com</a> We will respond to your mail within the next 24 hours.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="flexed-card">
                                <div className="space-between">
                                    <div className="icons-wrap">
                                        <Handshake style={{ fontSize: 40 }} />
                                    </div>
                                </div>
                                <motion.div className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Present vehicle(s) for checks</h3>
                                    <p className="hero-area-intro-description">
                                        1Go vehicles brought to University of Ilorin's main campus for inspection and document screening at the terminal, completed within 3-5 hours.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="flexed-card">
                                <div className="space-between">
                                    <div className="icons-wrap">
                                        <AppRegistration style={{ fontSize: 40 }} />
                                    </div>
                                </div>
                                <motion.div className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Reg vehicle(s) with school management</h3>
                                    <p className="hero-area-intro-description">
                                        Vehicle(s) must be registered with University of Ilorin management.
                                        1Go Technologies Ltd will assist in the registration process.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        <div className="space-between">
                            <Button disableElevation className='primary-button' color="primary">
                                Contact Us <ChevronRight />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="section-split">
                    <div className="hero-logo-container">
                        <motion.img
                            initial={{ opacity: 0, x: -1000 }}
                            animate={{ opacity: 1, x: 0 }}
                            src={OneGoLogo}
                            loading="lazy"
                            alt=""
                            className="one-go-logo hero-area" />
                    </div>
                </div>
            </div>
        </>
    )
}