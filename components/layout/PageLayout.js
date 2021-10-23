import React from 'react'
import Footer from './Footer'
import Header from './Header'
import BlueNav from './BlueNav'
import WhiteNav from './WhiteNav'
import { motion } from 'framer-motion'
const PageLayout = ({ children }) => {
const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}
    return (
        <div className='page-layout container-fluid'>
            <Header />

            <div className="col-12">
                <BlueNav />
                <WhiteNav />
            </div>

        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
            className="
                    flex flex-col items-start w-full pt-10
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                "
        >
            {children}
        </motion.main>
            <Footer />
        </div>
    )
}

export default PageLayout
