import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../public/logo2.png";
import { Facebook, Twitter, Linkedin, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="footer-inner">
        <div className="col-12">
          <div className="col-sm-12 footer-up d-lg-flex flex-row justify-content-between">
            <div className="col-sm-12 col-lg-6">
              <div>
                <Link href="/">
                  <Image
                    src={logoImage}
                    alt="pixs"
                    width="267"
                    height="40"
                    className="btn"
                  />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 footer-btns">
              <Link href="/auth/register">
                <button className="btn btn-secondary">Sign Up</button>
              </Link>
              <Link href="/auth/login">
                <button className="btn btn-outline">Login</button>
              </Link>
            </div>
          </div>
          <hr />
          <div className="row footer-down d-flex justify-content-between">
            <div className="col-lg-2 socials">
              <div className="d-flex flex-row justify-content-between">
                <Link href="https://www.facebook.com/EnrolledAgentdotcom">
                  <Facebook size="25" />
                </Link>
                <Link href="https://twitter.com/EAgentdotcom">
                  <Twitter size="25" />
                </Link>
                <Link href="https://www.linkedin.com/company/enrolledagent">
                  <Linkedin size="25" />
                </Link>
                <Link href="https://www.instagram.com/enrolledagentdotcom">
                  <Instagram size="25" />
                </Link>
              </div>
            </div>
            <div className="d-lg-flex flex-row justify-content-center">
              <div className="col-6">
                <ul className="footer-link-list">
                  <li className="footer-link">
                    <Link href="/find-agent">
                      Find a Tax Expert in your locality
                    </Link>
                  </li>
                  <li className="footer-link">
                    <Link href="/ea-listings">All Enrolled Agents</Link>
                  </li>
                  <li className="footer-link">
                    <Link href="/ask-an-ea">Ask an EA</Link>
                  </li>
                  <li className="footer-link">
                    <Link href="/new-listing">
                      Free Enrolled Agent Listings
                    </Link>
                  </li>
                  {/* <li className="footer-link">
                    <Link href="/pricing">
                      EA Pricing
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="col-">
                <ul className="footer-link-list">
                  <li className="footer-link">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="footer-link">
                    <Link href="/contact"> Contact Us</Link>
                  </li>
                  <li className="footer-link">
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                  <li className="footer-link">
                    <Link href="/terms">Terms of Use</Link>
                  </li>
                  <li className="footer-link">
                    <Link href="/">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
