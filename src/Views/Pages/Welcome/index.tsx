import {
    Button, Alert, Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material'
import { useState } from 'react'
import OneGoLogo from '../../../assets/img/1-goride-logo.png'
import NissanVanatteFront from '../../../assets/img/nissan-vanatte-front.jpg'
import NissanVanatteSide from '../../../assets//img/nissan-vanatte-side.jpg'

import SuzukiMiniBusFront from '../../../assets/img/suzuki-mini-bus-front.jpg'
import SuzukiMiniBusback from '../../../assets/img/suzuki-mini-bus-back.jpg'

import { motion } from "framer-motion"
import { Email, AppRegistration, Handshake, NoAccounts, PermIdentity, DocumentScanner, LabelImportant, ExpandMore, ChevronRight, PinDrop, LocationCity } from '@mui/icons-material'

export default function Welcome() {


    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

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
                            whileInView={{
                                rotateY: ['30deg', "60deg", "360deg", "50deg", "0deg"],
                                y:[-30, -10, -5, 0]
                            }}
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
                            state university(KWASU) by September, 2024.
                        </p>
                        <div className="space-between">
                            <Button variant="contained" disableElevation className='primary-button' color="primary">
                                Sign up as a partner.
                            </Button>
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
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    initial={{ scale: 0 }} className='flexed-text-wrap'>
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
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    initial={{ scale: 0 }} className='flexed-text-wrap'>
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
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    initial={{ scale: 0 }}
                                    className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Reg vehicle(s) with school management</h3>
                                    <p className="hero-area-intro-description">
                                        Vehicle(s) must be registered with University of Ilorin management.
                                        1Go Technologies Ltd will assist in the registration process.
                                    </p>
                                </motion.div>
                            </div>
                            <Alert variant="filled" severity="info">
                                This is a compulsory step to becoming a 1go vehicle partner, all agreement
                                made would be documented, carrying the signatures of both parties. It is also
                                advisable to have your lawyer screen through each document before
                                appending your signature to it.<br /> <br />
                                Viola! With these few easy steps you can now become a 1go vehicle partner.
                            </Alert>
                            <br />
                            <div className="space-betweem">
                                <Alert severity='warning'>
                                    Please note that the vehicle(s) would become the property of 1go
                                    technologies Ltd after the investment duration of five(5) years.
                                </Alert>
                            </div>
                        </div>
                        {/* 
                        <div className="space-between">
                            <Button disableElevation className='primary-button' color="primary">
                                Contact Us <ChevronRight />
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>


            <div className="page-section sectioning">
                <div className="section-split">
                    <div className="hero-inro-area">
                        <h2 className='h2-headline'>
                            Requirements
                        </h2>
                        <p className="hero-area-intro-description">
                            Here are some of the things we require from our vehicle <br /> partners.
                        </p>


                        <div className="flexed-col">
                            <div className="flexed-card">
                                <div className="space-between">
                                    <div className="icons-wrap">
                                        <LabelImportant style={{ fontSize: 40 }} />
                                    </div>
                                </div>
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Partner must be a citizen of Nigeria</h3>
                                    <p className="hero-area-intro-description">
                                        As of the time of writing this document, 1go technologies Ltd only accepts
                                        vehicle partners, who are citizens of Nigeria.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="flexed-card">
                                <div className="space-between">
                                    <div className="icons-wrap">
                                        <PermIdentity style={{ fontSize: 40 }} />
                                    </div>
                                </div>
                                <motion.div
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: -100 }}
                                    className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Partner must posses a valid means of identification</h3>
                                    <p className="hero-area-intro-description">
                                        Means of identification such as; Drivers license, National ID, Voters card, or
                                        international passport.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="flexed-card">
                                <div className="space-between">
                                    <div className="icons-wrap">
                                        <NoAccounts style={{ fontSize: 40 }} />
                                    </div>
                                </div>
                                <motion.div whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 100 }}
                                    className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Partner must have no criminal record</h3>
                                    <p className="hero-area-intro-description">
                                        As part of the ways of maintaining our integrity, 1go technologies Ltd would
                                        not partner with any individual who has a criminal record.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="flexed-card">
                                <div className="space-between">
                                    <div className="icons-wrap">
                                        <DocumentScanner style={{ fontSize: 40 }} />
                                    </div>
                                </div>
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Partner must be willing to adhere to agreement</h3>
                                    <p className="hero-area-intro-description">
                                        It is of utmost importance that a vehicle partner adheres to documented
                                        agreement, so as to develop and maintain a hitch-free relationship with the
                                        company
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        {/* 
                        <div className="space-between">
                            <Button disableElevation className='primary-button' color="primary">
                                Contact Us <ChevronRight />
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="page-section sectioning">
                <div className="section-split">
                    <div className="hero-inro-area">
                        <h2 className='h2-headline'>
                            Why choose 1go?
                        </h2>
                        {/* <p className="hero-area-intro-description">
                          
                        </p> */}


                        <div className="flexed-col">
                            <div className="flexed-card">
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Good ROI</h3>
                                    <p className="hero-area-intro-description">
                                        1go vehicle partners receive ROI of up to 50% per annum, which puts this
                                        amongst the list of top lucrative investment options.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="flexed-card">
                                <motion.div
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 100 }}
                                    className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Due process</h3>
                                    <p className="hero-area-intro-description">
                                        At 1go we believe in having all agreement with external parties on paper, no
                                        matter how trivial such agreement might be. This is to ensure that there are no
                                        hitches or misunderstanding in the future.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="flexed-card">
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    className='flexed-text-wrap'>
                                    <h3 className="h3-headline">Flexible payment plan</h3>
                                    <p className="hero-area-intro-description">
                                        As a Vehicle partner you can decide to spread your annual ROI across the
                                        year. You can decide to split up your ROI and get it; Monthly, Quarterly,
                                        Semi yearly or Yearly.
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
            </div>

            <div className="page-section sectioning">
                <div className="section-split">
                    <div className="hero-inro-area">
                        <h2 className='h2-headline'>
                            FAQ
                        </h2>
                        <p className="hero-area-intro-description">
                            Here are some frequently asked questions, which might answer some of
                            the questions you might have and if it doesn't, <br /> please send us a mail at
                            <a href="mailto:info@1goexplore.com">info@1goexplore.com</a> or call : <a target="_blank" href="https://wa.me/+2349135921624">+2349135921624</a>

                        </p>


                        <div className="flexed-col">
                            <Accordion className='flexed-arccodion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header" >
                                    How do I apply?

                                </AccordionSummary>
                                <AccordionDetails>
                                    You can apply to become a 1go vehicle partner by sending us a mail at
                                    <a href="mailto:info@1goexplore.com">info@1goexplore.com </a>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='flexed-arccodion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header" >
                                    Can I invest my money in the purchase of the vehicle
                                    instead?
                                </AccordionSummary>
                                <AccordionDetails>
                                    Yes, a vehicle partner can invest in the purchase and registration of the vehicle
                                    by the company instead of directly investing his/her vehicle. Although this
                                    would attract an extra NGN 5,000/$11 charge on your capital.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='flexed-arccodion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header" >
                                    What if the company defaults on payment?
                                </AccordionSummary>
                                <AccordionDetails>
                                    The company is bound by law to pay its Vehicle partners and would not fail to
                                    make payment at the stipulated time.

                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='flexed-arccodion' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header" >
                                    What if I don't have any of the listed vehicles?
                                </AccordionSummary>
                                <AccordionDetails>
                                    You can purchase any of the listed vehicles if you don't have any already and
                                    if you don't want to purchase it yourself, you can invest in the purchase of the
                                    vehicle by the company, although this would attract an extra NGN 5,000/$11
                                    charge on your capital.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='flexed-arccodion' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header" >
                                    Can I get my ROI weekly?
                                </AccordionSummary>
                                <AccordionDetails>
                                    As of the time of writing this document, 1go technologies Ltd do not support
                                    weekly payment to its Vehicle partners. Supported payment plans include;
                                    Monthly, Quarterly, Semi yearly and Yearly.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='flexed-arccodion' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header" >
                                    Will I get my vehicle back after the investment period?
                                </AccordionSummary>
                                <AccordionDetails>
                                    After the investment duration of five (5) years the invested vehicle becomes
                                    the property of 1go technologies Ltd.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='flexed-arccodion' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header" >
                                    Can I get my vehicle back before the end of
                                    the investment duration?
                                </AccordionSummary>
                                <AccordionDetails>
                                    No, withdrawal of vehicle is not allowed after all agreement are completed.
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <p className="hero-area-intro-description">
                            <i>
                                Our vehicle partners are a very important part of our mission at 1go, which is to
                                improve the standard of education in University and polytechnic campuses
                                across Nigeria in our own little way: by providing reliable transportation for the
                                students. And our vehicle partners provide the vehicles to achieve this mission
                                of ours.
                            </i>
                        </p>
                    </div>
                </div>
            </div>


            <div className="page-section sectioning">
                <div className="section-split">
                    <div className="hero-inro-area">
                        <h2 className='h2-headline'>
                            Contact us
                        </h2>
                        {/* <p className="hero-area-intro-description">
                          
                        </p> */}


                        <div className="flexed-col">
                            <div className="flexed-card plain">
                                <div className="icons-wrap plain left">
                                    <div className="space-between left"  >
                                        <PinDrop style={{ fontSize: 40 }} />
                                        <h3 className="h3-headline">Address</h3>
                                    </div>
                                </div>

                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    className='flexed-text-wrap'>
                                    <p className="hero-area-intro-description">
                                        No. 4, Fulani estate,<br />
                                        Fulani street, Tanke,<br />
                                        Ilorin, Kwara state,
                                        Nigeria.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="flexed-card plain">
                                <div className="icons-wrap plain left">
                                    <div className="space-between left"  >
                                        <PinDrop style={{ fontSize: 40 }} />
                                        <h3 className="h3-headline">Website</h3>
                                    </div>
                                </div>

                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    className='flexed-text-wrap'>
                                    <p className="hero-area-intro-description">
                                        <a href="http://www.1goexplore.com">http://www.1goexplore.com</a>
                                    </p>
                                </motion.div>
                            </div>

                            <div className="flexed-card plain">
                                <div className="icons-wrap plain left">
                                    <div className="space-between left"  >
                                        <Email style={{ fontSize: 40 }} />
                                        <h3 className="h3-headline">Email</h3>
                                    </div>
                                </div>

                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    className='flexed-text-wrap'>
                                    <p className="hero-area-intro-description">
                                        Email: <a href="mailto:info@1goexplore.com">info@1goexplore.com</a>
                                        <br />
                                        Phone:  <a href="tel:+2349135921624">+2349135921624</a>
                                        <br />
                                        Phone2:  <a href="tel:+2349135921624">+2348166864740</a>
                                        <br />
                                        Whastapp:  <a href="https://wa.me/+2349135921624">+2349135921624</a>
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}