import React from "react";
import styles from '../../../styles/Articles/AgentArticle.module.scss';
import Link from "next/link";
const index = () => {
  return (
    <div className={styles.agentArticle}>
      {/* <div className={styles.postArticle}> */}
        <div className={styles.message}>
          <h2>Messages</h2>
        </div>
      {/* </div> */}

      <div className={styles.questions}>
      

        <div className={styles.postdiv}>
          <div className={styles.leftPost}>
            {/* <p>1.</p> */}
            <p id={styles.p}>
             1. How do I get a letter that I am a gig worker or self employed contractor
            </p>

            <div className={styles.reply}>
            <p id={styles.replyP1}>reply</p>
            <p id={styles.replyP2}>  | Mark as read</p></div>

          </div>
          <div className={styles.date}>
            <p>21 October, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
