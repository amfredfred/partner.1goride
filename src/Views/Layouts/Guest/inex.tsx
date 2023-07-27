import { Box, Button } from "@mui/material";
import Heading from "./Heading/inex";
import Footing from "./Footing";
import HeroBgImage from '../../../assets/img/hero-bg-image.jpg'
import { WhatsApp } from "@mui/icons-material";
import OneGoLogo from '../../../assets/img/1-goride-logo.png'


export default function GuestLayout({ children }: { children: React.ReactNode }) {

    return (
        <Box className='layout gues-layout-main' >
            <Heading />
            <main className="page-main-content">
                <div className="page-section hero-area"
                    style={{ background: `url(${HeroBgImage})`, width: '100%' }}
                >
                    <div className="space-center">
                        <div className="section-split">
                            <div className="hero-inro-area">
                                <h1 className='hero-area-intro-headline'>
                                    A SMART WAY TO<br /> INVEST
                                </h1>
                                <p className="hero-area-intro-description">
                                    Earn up to 185% interest on your capital as a 1go vehicle partner.
                                </p>
                                <div className="space-between left">
                                    <Button variant='contained' disableElevation className='primary-button'  >
                                        <a href="https://wa.me/message/YAPZL6JUCOXHB1"> Sign up as a partner</a> <WhatsApp />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="section-split hide-on-mobile">
                            <div className="hero-logo-container">
                                <img
                                    src={OneGoLogo}
                                    loading="lazy"
                                    alt=""
                                    className="one-go-logo hero-area" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    {children}
                </div>
                <Footing />
            </main>
        </Box>
    )
}