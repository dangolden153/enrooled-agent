import React from 'react'
import Form from './Form'

const RequestCallback = () => {
    return (
        <div className='request-callback d-flex flex-column align-items-center justify-content-center'>
            <h1>Request a Call Back</h1>
            <h5>Please fill out the form and press the submit button.
                We will get back to you within 1-2 business days</h5>

            <Form action='/' submitText="Find More Local EA's">
                <div className="form-group">
                    <input type="text" name="fjjdnf" id="" placeholder="Name" />
                    <input type="text" name="fjjdnf" id="" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="text" name="fjjdnf" id="" placeholder="Subject" />
                    <input type="text" name="fjjdnf" id="" placeholder="Phone Number" />
                </div>
                <div className="form-group d-flex flex-row justify-content-center">
                    <textarea className="" rows='10' placeholder="Message"></textarea>
                </div>
            </Form>
        </div>
    )
}

export default RequestCallback
