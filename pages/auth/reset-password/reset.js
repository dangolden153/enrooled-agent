import React from 'react'
import styles from "../../../styles/auth/Reset.module.scss"
const reset = () => {
    return (
      <div>
        <div className={`container`}>
          <div className={`${styles.password_container}`}>
              <h1 className={`${styles.title}`}>Forgot Password</h1>
              <p>Enter your email address and we will send you a link to reset your password</p>
              <div className={`row`}>
                <input placeholder="Enter Your Email" />
              </div>
          </div>
        </div>
      </div>
    );
}

export default reset
