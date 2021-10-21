import { Envelope, Telephone } from 'react-bootstrap-icons'
import Link from 'next/link'
import Image from 'next/image'
import mail from '../../../public/images/mail.png'

const success = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='row nav blue-nav w-100 justify-content-between'>
                <div className="col-6">
                    <h5><Telephone color='white' /> 1-855-22-AGENT</h5>
                    <h5><Envelope color='white' /> info@enrolledagent.com</h5>
                </div>
                <div className="d-flex col-6 justify-content-end">
                    <h6 className="mt-3">Don't have an account?</h6>
                    <Link href='auth/register'>
                        <button className='btn btn-primary'>Sign Up</button>
                    </Link>
                </div>
            </div>

            <div className="content-wrapper d-flex flex-column align-items-center mt-5">
                <div className="content card card-auth align-items-center text-center">
                    <div className="image-wrapper mt-5">
                        <Image src={mail} width='200' height='100' />
                    </div>
                    <h2>Check your mail</h2>
                    <span>We just emailed you with the instructions to reset your password</span>
                    <h6 className='mt-4 mb-5'>or Sign in</h6>
                </div>
                <span className='mt-4'>PROVIDING THE BEST ENROLLED AGENT SERVICE AT THE COMFORT OF YOUR HOME</span>
            </div>
        </div>
    )
}

export default success
