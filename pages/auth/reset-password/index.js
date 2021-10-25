import {useState} from "react";
import {useRouter} from "next/router";
import { Envelope, Telephone } from 'react-bootstrap-icons'
import Link from 'next/link'
import Image from 'next/image'
import mail from '../../../public/images/mail.png'
import styles from "../../../styles/auth/Reset.module.scss";
import { useToasts } from "react-toast-notifications";
import { sendPasswordReset } from "../../../src/services/user";
const index = () => {
  const router = useRouter();
  const { addToast } = useToasts();
  const [data, setData] = useState({
    email: ""
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
    } = data;

    try {
      setLoading(true);
      let response = await sendPasswordReset(data);
      if (response) {
        if (response.data) {
          addToast("Password reset link has been sent to your email successfully", {
            appearance: "success",
            autoDismiss: true,
          });
        }
        setLoading(false);
        router.push('/reset-password/reset');
      }
    } catch (error) {
      setLoading(false);
      addToast(
        `${
          error.response.msg
            ? error.response.msg
            : "An error occured. Please try again."
        }`,
        {
          appearance: "error",
          autoDismiss: true,
        }
      );
    }
  };
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
                    <h2>Forgot Password</h2>
                    <span>Enter your email address and we will send you a link to reset your password</span>
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex text-right">
                      <label>Email</label>
                      <input placeholder="Enter your email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
                      />
                      </div>
                      <button type="submit" className={`${styles.reset_btn}`}>Send me the link</button>
                    </form>
                    <h6 className='mt-4 mb-5'>or Sign in</h6>
                </div>
                <span className='mt-4'>PROVIDING THE BEST ENROLLED AGENT SERVICE AT THE COMFORT OF YOUR HOME</span>
            </div>
        </div>
    )
}

export default index
