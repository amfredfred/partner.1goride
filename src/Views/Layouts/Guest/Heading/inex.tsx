
import { motion } from 'framer-motion'
import OneGoLogo from '../../../../assets/img/1-goride-logo.png'
import { Button } from '@mui/material'

export default function Heading() {


    return (
        <div className="heading-main">
            <div className="space-between" style={{width:'100%'}}>
                <h2 className="h2-headline">
                    <motion.img
                        className='site-logo'
                        src={OneGoLogo}
                    />
                    {/* ride */}
                </h2>
                <Button variant='contained' >
                    <a href="https://wa.me/message/YAPZL6JUCOXHB1">Become A Partner</a>
                </Button>
            </div>
        </div>
    )
}