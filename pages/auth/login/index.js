import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../src/redux/actions/auth/auth";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import saveSession from "../../../hooks/saveSession";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "../../../styles/auth/Login.module.scss";
import Link from "next/link";

library.add(fab, faGoogle);
library.add(fab, faFacebook);
library.add(fab, faTwitter);

const Login = () => { 
  const { addToast } = useToasts();
  const router = useRouter();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (email && password) {
      const res = await dispatch(login(email, password));
      if (res.code === 200) {
        addToast("Logged in successfully!", {
          appearance: "success",
          autoDismiss: true,
        });
        await saveSession(res.data, res.data.access_token);
        router.push("/dashboard");
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
      <div className={styles.login}>
        <div className={styles.log}>
          <h1 className={styles.logtext}>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.buttons}>
            <div>
              <input
                className={styles.mails}
                placeholder="Login with Email"
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
          </div>

          <div className={styles.reset}>
            <div className={styles.passtext}>
              <p>Can't remember my password</p>
              <Link href="/Login">
                <a id={styles.set}>Reset Password</a>
              </Link>
            </div>

            <div className={styles.btn}>
              <button type="submit">
                {loading && "Loading"}
                Continue
              </button>
            </div>
          </div>

          <div className={styles.socials}>
            <div className={styles.google}>
              <button>
                <FontAwesomeIcon icon={["fab", "google"]} id={styles.icon} />
                Login with Google
              </button>
            </div>

            <div className={styles.facebook}>
              <button>
                <FontAwesomeIcon icon={["fab", "facebook-f"]} id={styles.icon} />
                Login with Facebook
              </button>
            </div>

            <div className={styles.twitter}>
              <button>
                <FontAwesomeIcon icon={["fab", "twitter"]} id={styles.icon} /> Login with Twitter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
