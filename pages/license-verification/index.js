import React from 'react'
import styles from '../../styles/LicenseVerification.module.scss'
import banner1 from "../../public/images/banners/landing-page.png";
import Banner from '../../components/Banner'
import Form from '../../components/Form';

const index = () => {
    return (
        <div className={styles.licenseVerification}>
            <Banner background={banner1}>
                <h1>Enrolled Agent License Verification</h1>
                <p>Is your Enrolled Agent’s license active?
                    This service is used to verify if an Enrolled Agent's license is currently active.</p>
            </Banner>

            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.cost}`}>
                <h4>EA Verification Service</h4>
                <h3>Verify Enrolled Agents in any state. $49.00</h3>
            </div>

            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.contact}`}>
                <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                    <h1>Your Contact Information</h1>
                    <h4>Provide your basic details so we can send you our verification findings.</h4>
                </div>

                <Form submitText='Find More Local EAs'>
                    <div className="form-group">
                        <input type="text" name="name" id="" placeholder='Name' />
                        <input type="email" name="email" id="" placeholder='Email' />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" id="" placeholder='Subject' />
                        <input type="tel" name="phone" id="" placeholder='Phone Number' />
                    </div>
                    <div className="form-group">
                        <textarea name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
                    </div>

                </Form>
            </div>

            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.info}`}>
                <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                    <h1>EA Information</h1>
                    <h4>Provide the details of the Enrolled Agent you wish to verify..
                        Most of the fields are optional.</h4>
                </div>

                <Form submitText='Find More Local EAs'>
                    <div className="form-group">
                        <input type="text" name="name" id="" placeholder='Name' />
                        <input type="email" name="email" id="" placeholder='Email' />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" id="" placeholder='Subject' />
                        <input type="tel" name="phone" id="" placeholder='Phone Number' />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" id="" placeholder='Subject' />
                        <input type="tel" name="phone" id="" placeholder='Phone Number' />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" id="" placeholder='Subject' />
                        <input type="tel" name="phone" id="" placeholder='Phone Number' />
                    </div>
                    <div className="form-group">
                        <textarea name="message" id="" cols="30" rows="8" placeholder='Message'></textarea>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default index
