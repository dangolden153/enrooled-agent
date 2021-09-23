import React from 'react'
import { Envelope, Telephone } from 'react-bootstrap-icons'

const BlueNav = () => {
    return (
        <div className='row nav blue-nav justify-content-between'>
            <div className="col-6">
                <h5><Telephone color='white'/> 1-855-22-AGENT</h5>
                <h5><Envelope color='white'/> info@enrolledagent.com</h5>
            </div>
            <div className="d-flex col-6 justify-content-end">
                <button className='btn btn-primary'>Sign Up</button>
                <button className='btn btn-outline-primary'>Login</button>
            </div>
        </div>
    )
}

export default BlueNav
