import React from 'react'
import { Envelope, Telephone } from 'react-bootstrap-icons'
import Link from 'next/link'

const BlueNav = () => {
    return (
        <div className='row nav blue-nav justify-content-between'>
            <div className="col-6">
                <h5><Telephone color='white' /> 1-855-22-AGENT</h5>
                <h5><Envelope color='white' /> info@enrolledagent.com</h5>
            </div>
            <div className="d-flex col-6 justify-content-end">
                <Link href='auth/register'>
                    <button className='btn btn-primary'>Sign Up</button>
                </Link>
                <Link href='auth/login'>
                    <button className='btn btn-outline-primary'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default BlueNav
