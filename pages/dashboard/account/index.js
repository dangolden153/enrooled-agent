import React from "react";
import styles from "../../../styles/dashboard/Account.module.scss";
import { Pencil } from "react-bootstrap-icons";

const index = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.formWrapper} form-wrapper`}>
        <div className="row">
          <div className="col-6">
            <h3>Update your details</h3>
          </div>
          <div className="col-6 justify-content-end">
            <span>
              <Pencil /> Edit profile
            </span>
          </div>
        </div>
        <form className="form">
          <div className="row">
            <div className="col-auto">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="First name"
              />
            </div>
            <div className="col-auto">
              <label for="lname">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Last name"
              />
            </div>
            <div className="col-auto">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-secondary mt-5">
            Update Account
          </button>
        </form>
      </div>

      <div className={`${styles.formWrapper} form-wrapper mt-5`}>
        <h3>Change account password</h3>

        <form className="form">
          <div className="row">
            <div className="col-auto">
              <label for="cpass">Current password</label>
              <input
                type="password"
                className="form-control"
                id="cpass"
                placeholder="Current password"
              />
            </div>
            <div class="col-auto">
              <label for="npass">New password</label>
              <input
                type="password"
                class="form-control"
                id="npass"
                placeholder="New password"
              />
            </div>
            <div class="col-auto">
              <label for="vpass">Verify password</label>
              <input
                type="password"
                class="form-control"
                id="vpass"
                placeholder="Verify password"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-secondary mt-5">
            Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
