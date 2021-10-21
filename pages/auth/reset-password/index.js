import React from 'react'
import styles from "../../../styles/auth/Reset.module.scss"
const index = () => {
    return (
      <div>
        <div className={`container`}>
          <div className={`${styles.passwordContainer}`}>
              <h1 className={`${styles.title} `}>Forgot Password</h1>
          </div>
        </div>
      </div>
    );
}

export default index
