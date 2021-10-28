import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/ask-an-ea/HelpPage.module.scss";
import Dummy from "../../public/images/card-man.png";
import data from "../../components/PostList.json";
import Collapse from "react-bootstrap/Collapse";
// import { Container } from 'react-bootstrap';

const index = () => {
  const [readMore, setReadMore] = useState(false);

  const linkName = readMore ? "Less << " : "More >> ";

  return (
    <div className={styles.helpPage}>
      <div className="row container-fluid">
        {/* QUESTION CARD */}
        <div className={`col-md-8`}>
          <div className={`${styles.leftCard1} card`}>
            <div className="card-body">
              <div className="d-flex">
                <Image
                  width={75}
                  height={75}
                  src={Dummy}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p>Cameron Williamson</p>
                  <h4>What is your question?</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.leftCard2} mb-1 card`}>
            <div className="card-body">
              <div className="d-flex">
                <Image
                  width={75}
                  height={75}
                  src={Dummy}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p>Cameron Williamson</p>
                  <p style={{ opacity: "70%", color: "#000" }}>Tax Payer</p>
                </div>
              </div>
              <div className="mb-3">
                <h5>How do I go about getting the best enrolled agent?</h5>
                <p style={{ fontSize: "18px !important" }}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section
                  <Collapse in={readMore}>
                    <div
                      style={{ fontSize: "18px !important" }}
                      id="example-collapse-text"
                    >
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </div>
                  </Collapse>
                  <a
                    className=""
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <span className="text-primary">....({linkName})</span>
                  </a>
                </p>
              </div>
              <p
                style={{
                  fontSize: "18px !important",
                  opacity: "40%",
                  color: "#000",
                }}
              >
                reply | comment | Like
              </p>
            </div>
          </div>
          <div className={`${styles.leftCard2} mb-1 card`}>
            <div className="card-body">
              <div className="d-flex">
                <Image
                  width={75}
                  height={75}
                  src={Dummy}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p>Cameron Williamson</p>
                  <p style={{ opacity: "70%", color: "#000" }}>Tax Payer</p>
                </div>
              </div>
              <div className="mb-3">
                <h5>How do I go about getting the best enrolled agent?</h5>
                <p style={{ fontSize: "18px !important" }}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section
                  <Collapse in={readMore}>
                    <div
                      style={{ fontSize: "18px !important" }}
                      id="example-collapse-text"
                    >
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </div>
                  </Collapse>
                  <a
                    className=""
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <span className="text-primary">....({linkName})</span>
                  </a>
                </p>
              </div>
              <p
                style={{
                  fontSize: "18px !important",
                  opacity: "40%",
                  color: "#000",
                }}
              >
                reply | comment | Like
              </p>
            </div>
          </div>
          <div className={`${styles.leftCard2} mb-1 card`}>
            <div className="card-body">
              <div className="d-flex">
                <Image
                  width={75}
                  height={75}
                  src={Dummy}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p>Cameron Williamson</p>
                  <p style={{ opacity: "70%", color: "#000" }}>Tax Payer</p>
                </div>
              </div>
              <div className="mb-3">
                <h5>How do I go about getting the best enrolled agent?</h5>
                <p style={{ fontSize: "18px !important" }}>
                  To get an enrolled agent, there are multiple verified agents
                  on the platform so depending on your location search for the
                  best enrolled agent in
                  <Collapse in={readMore}>
                    <div
                      style={{ fontSize: "18px !important" }}
                      id="example-collapse-text"
                    >
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </div>
                  </Collapse>
                  <a
                    className=""
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <span className="text-primary">....({linkName})</span>
                  </a>
                </p>
              </div>
              <p
                style={{
                  fontSize: "18px !important",
                  opacity: "40%",
                  color: "#000",
                }}
              >
                reply | comment | Like
              </p>
            </div>
          </div>
          <div className={`${styles.leftCard2} mb-1 card`}>
            <div className="card-body">
              <div className="d-flex">
                <Image
                  width={75}
                  height={75}
                  src={Dummy}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p>Cameron Williamson</p>
                  <p style={{ opacity: "70%", color: "#000" }}>Tax Payer</p>
                </div>
              </div>
              <div className="mb-3">
                <h5>How do I go about getting the best enrolled agent?</h5>
                <p style={{ fontSize: "18px !important" }}>
                  To get an enrolled agent, there are multiple verified agents
                  on the platform so depending on your location search for the
                  best enrolled agent in
                  <Collapse in={readMore}>
                    <div
                      style={{ fontSize: "18px !important" }}
                      id="example-collapse-text"
                    >
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </div>
                  </Collapse>
                  <a
                    className=""
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <span className="text-primary">....({linkName})</span>
                  </a>
                </p>
              </div>
              <p
                style={{
                  fontSize: "18px !important",
                  opacity: "40%",
                  color: "#000",
                }}
              >
                reply | comment | Like
              </p>
            </div>
          </div>
        </div>

        {/* TRENDING CARD */}
        <div className={` col-md-4 `}>
          <div className={`${styles.rightCard}  card`}>
            <div className="card-body">
              <div className=" text-center">
                <p>Trending Topics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
