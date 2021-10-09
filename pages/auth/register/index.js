import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../src/redux/actions/auth/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from '../../../styles/auth/Register.module.css'
import Link from "next/link";

library.add(fab, faGoogle);
library.add(fab, faFacebook);
library.add(fab, faTwitter);

const Register = () => {
  const inputField = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(inputField);
  const loading = useSelector((state) => state.auth.initialState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { email, password } = form;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (email && password) {
      dispatch(login(email, password));
    }
  };
  return (
    <div className={`container`}>
      <div className={styles.signUp}>
        <h1 className={styles.acc}>Create an Account</h1>
        <p><b>Would you like to advertise your practice on our platform for free?</b></p>
        <p className={styles.signP}>Would you like to advertise your practice on our platform for free?

          Secure your spot in the nation's largest directory of licensed
          and verified Tax Preparers. Creating an account gives you the
          ability to claim your listing; update your contact details, etc.
          You also get to access free tools that will aid you expand your practice,
          stay in compliance, and build your online reputation.</p>

      </div>
      <div className={styles.register}>
        <div className={styles.log}>
          <h1 className={styles.logtext}>Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.buttons}>
            <div>
              <input
                className={styles.Fname}
                placeholder="First name"
                type="text"
                required
                name="name"
                value={'First name'}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className={styles.Lname}
                placeholder="Last Name"
                type="text"
                required
                name="name"
                value={'Last name'}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className={styles.Cmails}
                placeholder="Your Email"
                type="text"
                autoComplete="email"
                required
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className={styles.password}
                placeholder="Password"
                type="password"
                required
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className={styles.mails}
                placeholder="Confirm Email"
                type="text"
                autoComplete="email"
                required
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className={styles.reset}>
            <div className={styles.passtext}>
              <p>Do you have an account?</p>
              <Link href="/Register">
                <a id={styles.set}>Login to your account</a>
              </Link>
            </div>

            <div className={styles.btn}>

              <button type="submit">
                {loading && "Loading"}
                Sign up
              </button>
            </div>
          </div>

          <div className={styles.socials}>
            <div className={styles.google}>
              <button>
                <FontAwesomeIcon icon={["fab", "google"]} id={styles.icon} />
                Sign up with Google
              </button>
            </div>

            <div className={styles.facebook}>
              <button>
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  id={styles.icon}
                />
                Sign up with Facebook
              </button>
            </div>

            <div className={styles.twitter}>
              <button>
                <FontAwesomeIcon icon={["fab", "twitter"]} id={styles.icon} />{" "}
                Sign up with Twitter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

