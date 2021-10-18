import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../../src/redux/actions/auth/auth";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "../../../styles/auth/Register.module.scss";
import { checkEmpty } from "../../../src/utils/checkEmptyObj";
import Link from "next/link";
import { useToasts } from "react-toast-notifications";

library.add(fab, faGoogle);
library.add(fab, faFacebook);
library.add(fab, faTwitter);

const Register = () => {
  const { addToast } = useToasts();
  const router = useRouter();
  const inputField = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    password_confirmation: "",
  };

  const [passwordError, setPasswordError] = useState(false);
  const [form, setForm] = useState(inputField);
  const loading = useSelector((state) => state.auth.initialState);
  const [submitted, setSubmitted] = useState(false);
  const { password, password_confirmation } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const comparePassword = () => {
    if (password !== password_confirmation) setPasswordError(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const isEmpty = checkEmpty(form);
    if (!isEmpty) {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (form[key] !== null && form[key] !== undefined) {
          return formData.append(key, form[key]);
        }
      });
      const res = await register(formData);
      console.log(res);
      if (res.code === 200) {
        addToast(res?.msg || "Registration successful!", {
          appearance: "success",
          autoDismiss: true,
        });
        router.push("/auth/login");
      } else {
        addToast(res?.response?.data?.msg || "An error occured trying to login.", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    }
  };
  return (
    <div className={`container`}>
      <div className={styles.signUp}>
        <h1 className={styles.acc}>Create an Account</h1>
        <p>
          <b>Would you like to advertise your practice on our platform for free?</b>
        </p>
        <p className={styles.signP}>
          Would you like to advertise your practice on our platform for free? Secure your spot in
          the nation's largest directory of licensed and verified Tax Preparers. Creating an account
          gives you the ability to claim your listing; update your contact details, etc. You also
          get to access free tools that will aid you expand your practice, stay in compliance, and
          build your online reputation.
        </p>
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
                name="first_name"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className={styles.Lname}
                placeholder="Last Name"
                type="text"
                required
                name="last_name"
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
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className={styles.mails}
                placeholder="Confirm Password"
                type="password"
                required
                name="password_confirmation"
                onChange={handleChange}
                onBlur={comparePassword}
              />
            </div>
            {passwordError && <p>Passwords do not match</p>}
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
                <FontAwesomeIcon icon={["fab", "facebook-f"]} id={styles.icon} />
                Sign up with Facebook
              </button>
            </div>

            <div className={styles.twitter}>
              <button>
                <FontAwesomeIcon icon={["fab", "twitter"]} id={styles.icon} /> Sign up with Twitter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
