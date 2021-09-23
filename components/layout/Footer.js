import React from 'react'
import Image from 'next/image'
import logoImage from '../../public/logo2.png'
import { Facebook, Twitter, Linkedin, Instagram } from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <footer className='footer container-fluid'>
            <div className="footer-inner">
                <div className="col-12">
                    <div className="row footer-up d-flex justify-content-between">
                        <div className="col-6">
                            <Image src={logoImage} alt="pixs" width="267" height="40" className="" />
                        </div>
                        <div className="d-flex col-6 justify-content-end">
                            <button className='btn btn-outline'>Sign Up</button>
                            <button className='btn btn-outline'>Login</button>
                        </div>
                    </div>
                    <hr />
                    <div className="row footer-down d-flex justify-content-between">
                        <div className="col-4 socials">
                            <div className="row d-flex justify-content-between">
                                <Facebook size='25' />
                                <Twitter size='25' />
                                <Linkedin size='25' />
                                <Instagram size='25' />
                            </div>
                        </div>
                        <div className="col-4">
                            <ul className="footer-link-list">
                                <li className="footer-link">Find a Tax Expert in your locality</li>
                                <li className="footer-link">All Enrolled Agents</li>
                                <li className="footer-link">Ask an EA</li>
                                <li className="footer-link">Verify an Enrolled Agents License</li>
                                <li className="footer-link">Enrolled Agent</li>
                                <li className="footer-link">Free Enrolled Agent Listings</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul className="footer-link-list">
                                <li className="footer-link">About Us</li>
                                <li className="footer-link"> Contact Us</li>
                                <li className="footer-link">Privacy Policy</li>
                                <li className="footer-link">Terms of Use</li>
                                <li className="footer-link">FAQs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
