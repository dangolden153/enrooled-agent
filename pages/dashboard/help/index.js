import React from "react";
import styles from "../../../styles/dashboard/Help.module.scss";
import Accordion from "../../../components/Accordion";
import AccordionItem from "../../../components/AccordionItem";

const data = [
  {
    title: "Getting Started",
    extra: "Discover in many ways in which our customers use EnrolledAgent",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt commodo neque vitae turpis eu, potenti scelerisque mattis. Consectetur rhoncus amet, ligula lacus augue tortor, sed. Fames a est suscipit enim. Fames eget egestas sed auctor non interdum tortor euismod.",
  },
  {
    title: "What is the Ask an EA Program? ",
    extra: "Discover in many ways in which our customers use EnrolledAgent",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt commodo neque vitae turpis eu, potenti scelerisque mattis. Consectetur rhoncus amet, ligula lacus augue tortor, sed. Fames a est suscipit enim. Fames eget egestas sed auctor non interdum tortor euismod.",
  },
  {
    title: "How do I create an article?",
    extra: "Discover in many ways in which our customers use EnrolledAgent",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt commodo neque vitae turpis eu, potenti scelerisque mattis. Consectetur rhoncus amet, ligula lacus augue tortor, sed. Fames a est suscipit enim. Fames eget egestas sed auctor non interdum tortor euismod.",
  },
  {
    title: "How Do I Find My Listing?",
    extra: "Discover in many ways in which our customers use EnrolledAgent",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt commodo neque vitae turpis eu, potenti scelerisque mattis. Consectetur rhoncus amet, ligula lacus augue tortor, sed. Fames a est suscipit enim. Fames eget egestas sed auctor non interdum tortor euismod.",
  },
  {
    title: "What is an article submission? ",
    extra: "Discover in many ways in which our customers use EnrolledAgent",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt commodo neque vitae turpis eu, potenti scelerisque mattis. Consectetur rhoncus amet, ligula lacus augue tortor, sed. Fames a est suscipit enim. Fames eget egestas sed auctor non interdum tortor euismod.",
  },
  {
    title: "How do I promote my Listing?",
    extra: "Discover in many ways in which our customers use EnrolledAgent",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt commodo neque vitae turpis eu, potenti scelerisque mattis. Consectetur rhoncus amet, ligula lacus augue tortor, sed. Fames a est suscipit enim. Fames eget egestas sed auctor non interdum tortor euismod.",
  },
  {
    title: "Add an EA to an existing firm",
    extra: "Discover in many ways in which our customers use EnrolledAgent",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt commodo neque vitae turpis eu, potenti scelerisque mattis. Consectetur rhoncus amet, ligula lacus augue tortor, sed. Fames a est suscipit enim. Fames eget egestas sed auctor non interdum tortor euismod.",
  },
  {
    title: "How do I edit an article?",
    extra: "Discover in many ways in which our customers use EnrolledAgent",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt commodo neque vitae turpis eu, potenti scelerisque mattis. Consectetur rhoncus amet, ligula lacus augue tortor, sed. Fames a est suscipit enim. Fames eget egestas sed auctor non interdum tortor euismod.",
  },
];

const index = () => {
  return (
    <div>
      <div className={`card ${styles.help}`}>
        <div className="card-body">
          <div className="text-center">
            <h2>FAQS</h2>
            <span>
              Welcome to our FAQ series, designed to help you get the most out
              of your Enrolled Agent account.
            </span>
          </div>

          <div className={styles.accordion}>
            <Accordion>
              {data.map((item, index) => (
                <AccordionItem
                  key={index}
                  id={index}
                  title={item.title}
                  extra={item.extra}
                  body={item.body}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
