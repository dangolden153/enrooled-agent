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
          <div className="row footer-up d-flex justify-content-between">
            <div className="col-6">
              <Image
                src={logoImage}
                alt="pixs"
                width="267"
                height="40"
                className=""
              />
            </div>
            <div className="d-flex col-6 justify-content-end">
              <button className="btn btn-outline">Sign Up</button>
              <button className="btn btn-outline">Login</button>
            </div>
          </div>
          <hr />
          <div className="row footer-down d-flex justify-content-between">
            <div className="col-lg-2 socials">
              <div className="d-flex flex-row justify-content-between">
                <Link href="https://www.facebook.com/EnrolledAgentdotcom"><Facebook size="25" /></Link>
                <Link href="https://twitter.com/EAgentdotcom"><Twitter size="25" /></Link>
                <Link href="https://www.linkedin.com/company/enrolledagent"><Linkedin size="25" /></Link>
                <Link href="https://www.instagram.com/enrolledagentdotcom"><Instagram size="25" /></Link>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center">
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
                    <Link href="/faq">FAQs</Link>
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
