import React from "react";
// import Image from 'next/image'
// import Google from '../../../public/auth/google-brands.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../../styles/auth/_login.module.scss";
import Link from "next/link";

library.add(fab, faGoogle);
library.add(fab, faFacebook);
library.add(fab, faTwitter);

const Login = () => {
  return (
    <div className={`container`}>
      <div className={styles.login}>
        <div className={styles.log}>
          <h1 className={styles.logtext}>Login</h1>
        </div>

        <div className={styles.buttons}>
          <div>
            <form>
              <input
                className={styles.email}
                placeholder="Login with Email"
                type="text"
                autoComplete="email"
                required
              />
            </form>
          </div>
          <div>
            <form>
              <input
                className={styles.password}
                placeholder="Password"
                type="password"
                required
              />
            </form>
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
            <button type="submit">Continue</button>
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
              <FontAwesomeIcon icon={["fab", "twitter"]} id={styles.icon} />{" "}
              Login with Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
