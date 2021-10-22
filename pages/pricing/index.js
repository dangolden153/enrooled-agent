import React from "react";
import styles from "../../styles/pricing/Pricing.module.scss";
import Image from "next/image";
import Check from "../../public/images/check-mark.png";
import Man from "../../public/images/start-section1.png";

const index = () => {
  return (
    <div>
      <div className={`${styles.text} text-center`}>
        <h1>Compare our online tax software </h1>
        <p>
          Everything you need to file your tax return based on your tax needs{" "}
        </p>
        <p style={{ fontSize: "16px !important" }}>
          EnrolledAgents works for all tax filers, regardless of complexity. Let
          our network of EAs help you save the most.
        </p>
      </div>
      <div className={`${styles.cards} container-fluid`}>
        <div className="row">
          <div className="col-md-3">
            <div
              style={{
                minHeight: "700px",
                minWidth: "300px",
                borderTop: "5px solid #01105b",
              }}
              className="card"
            >
              <div className="card-body text-center">
                <h2>Basic</h2>
                <p>
                  W-2 filer, renter, standard <br /> deduction
                </p>
                <h1>$89.99</h1>
                <span>$40.50 per state filed</span>
                <div className="mt-3">
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">
                        An Enrolled Agent will prepare your entire tax return
                        from start to finish
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">
                        A CPA or EA will prepare your entire tax return from
                        start to finish
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">Optional Audit Protection</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">
                        Analysis of filing status to maximize tax benefits
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">No additional charge for extension</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                minHeight: "700px",
                minWidth: "300px",
                borderTop: "5px solid #4896e9",
              }}
              className="card"
            >
              <div className="card-body text-center">
                <h2>Premium</h2>
                <p>
                  Homeowners, Investors, landlords, non-residents, expatriates
                </p>
                <h1>$175.99</h1>
                <span>$40.50 per state filed</span>

                <p className="mt-4 mb-4 fw-bold">
                  Everything in Basic{" "}
                  <em>
                    <strong>plus</strong>{" "}
                  </em>
                </p>
                <div className="mt-3 mb-2">
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">
                        Get tax planning advice on deductions and credits
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">
                        Complete capture of your investments and rental property
                        activity
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">
                        Ensure proper tax compliance for foreign firms
                      </p>
                    </div>
                  </div>

                  <button className={`btn ${styles.btn1}`}>
                    Start For Free
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                minHeight: "700px",
                minWidth: "300px",
                borderTop: "5px solid #4896e9",
              }}
              className="card"
            >
              <div className="card-body text-center">
                <h2>Self Employed</h2>
                <p>
                  Self-employed, freelancers, <br /> and contractors
                </p>
                <h1>$233.99</h1>
                <span>$40.50 per state filed</span>

                <p className="mt-4 mb-4 fw-bold">
                  Everything in Premium{" "}
                  <em>
                    <strong>plus</strong>{" "}
                  </em>
                </p>
                <div className="mt-3 mb-2">
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">
                        Business activity review to ensure maximum tax benefit
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">Year-end catchup bookkeeping available</p>
                    </div>
                  </div>

                  <button className={`btn ${styles.btn2}`}>
                    Start For Free
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                minHeight: "700px",
                minWidth: "300px",
                borderTop: "5px solid #ffcc40",
              }}
              className="card"
            >
              <div className="card-body text-center">
                <h2>Business</h2>
                <p>Partnerships, corps, trusts and estates, and non-profits</p>
                <h1>$404.99</h1>
                <span>$40.50 per state filed</span>

                <p className="mt-4 mb-4 fw-bold">
                  Everything in Self Employed{" "}
                  <em>
                    <strong>plus</strong>{" "}
                  </em>
                </p>
                <div className="mt-3 mb-2">
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">
                        Ensure your business is benefiting from all the latest
                        tax laws
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <Image src={Check} alt="check" />
                    </div>

                    <div className="col-md-10 text-start">
                      <p className="">
                        Work with your EA to uncover additional business
                        benefits
                      </p>
                    </div>
                  </div>

                  <button className={`btn ${styles.btn3}`}>
                    Start For Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.start} container`}>
        <div className="row">
          <div style={{ paddingTop: "100px" }} className="col-md-6">
            <p style={{ color: "#1976d2 !important", fontSize: "14px" }}>
              Everything you need
            </p>
            <h1>We Got You Covered</h1>
            <p>
              Filing has never been so easy and stress-free with EnrolledAgents
              The simplest way to search and access your next Tax Expert on the
              go anytime, anywhere.
            </p>
            <button className="btn">Get Started</button>
          </div>
          <div className="col-md-6">
            <Image src={Man} alt="man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
