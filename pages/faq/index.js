import React,{useEffect, useState} from "react";
import { useRouter } from "next/router";
import styles from "../../styles/faq/Faq.module.scss";
import lens from "../../public/images/lens.png";
import Image from "next/image";
import { Search } from "react-bootstrap-icons";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import Accordion from "../../components/Accordion";
import AccordionItem from "../../components/AccordionItem";
import {getFaqs} from "../../src/services/common";

const index = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

    const handleGetAllFaqs = async () => {
      const res =  await getFaqs();
      if (res) setLoading(false);
      setData(res.data.data);
      console.log("faq",res);
    };

    useEffect(() => {
      if (router.isReady) handleGetAllFaqs();
    }, [router]);
    if (isLoading) {
      return <p>Loading</p>;
    }
  return (
    <div className={`d-flex flex-column justify-content-center ${styles.help}`}>
      <div className="d-flex flex-row mb-5">
        <div
          className={`d-flex flex-column col-lg-6 align-items-center ${styles.faqLeft}`}
        >
          <h1>Frequently Asked Questions</h1>
          <form className="input-group mb-3" action="" method="post">
            <input
              type="text"
              className="form-control"
              placeholder="Search for answers"
              aria-label="Search for answers"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              {" "}
              <Search />{" "}
            </button>
          </form>
          <p>
            Need some help with your order or got a burning question that you
            need answered pronto? if you can’t find an answer to your question
            drop us an email at <span>info@enrolledagent.com</span>...
          </p>
        </div>
        <div className="d-flex flex-column col-lg-6 align-items-center justify-content-center">
          <Image src={lens} />
        </div>
      </div>

      <div className={`d-flex flex-column ${styles.popular}`}>
        <h2>Popular FAQs</h2>
        <CardList>
          <Card className="card-faq">
            <h2>General Information</h2>
          </Card>
          <Card className="card-faq">
            <h2>User Account</h2>
          </Card>
          <Card className="card-faq">
            <h2>Agent Account</h2>
          </Card>
        </CardList>
      </div>

      <div className={`d-flex flex-row ${styles.accordion}`}>
        <Accordion>
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              id={index}
              title={item.title}
              extra={item.extra}
              body={item.message}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default index;
