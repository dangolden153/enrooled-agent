import React from "react";
import { Envelope, Telephone } from "react-bootstrap-icons";
import Link from "next/link";
import Image from "next/image";
import mail from "../../../public/images/mail.png";

const success = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="row nav blue-nav w-100 justify-content-between">
        <div className="col-6">
          <h5>
            <Telephone color="white" /> 1-855-22-AGENT
          </h5>
          <h5>
            <Envelope color="white" /> info@enrolledagent.com
          </h5>
        </div>
        <div className="d-flex col-6 justify-content-end">
          <h6 className="mt-3">Don't have an account?</h6>
          <Link href="auth/register">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
      </div>

      <div className="content-wrapper d-flex flex-column align-items-center mt-5 mb-5">
        <div className="content card card-auth align-items-center text-center">
          <div
            style={{ height: "80px !important" }}
            className="image-wrapper mt-5"
          >
            <Image src={mail} width="200" height="100" />
          </div>
          <h3 style={{ color: "#393939" }}>Check your mail</h3>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            We just emailed you with the instructions to verify your account
          </p>
          <p
            className="text-muted"
            style={{ fontSize: "12px", marginTop: "10px", marginBottom: "0" }}
          >
            Didn’t get verification email?
          </p>
          <Link href="#">
            <p
              style={{
                textDecoration: "underline",
                color: "#01105b",
                fontSize: "14px",
                marginTop: "0",
              }}
              className=""
            >
              Resend verification email
            </p>
          </Link>
        </div>
        <p
          style={{ fontSize: "12px", color: "rgba(1, 16, 91, 0.35)" }}
          className="mt-4 fw-bold"
        >
          PROVIDING THE BEST ENROLLED AGENT SERVICE AT THE COMFORT OF YOUR HOME
        </p>
      </div>
    </div>
  );
};

export default success;
