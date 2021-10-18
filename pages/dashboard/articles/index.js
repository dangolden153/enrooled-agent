import React from 'react'
import styles from '../../../styles/Articles/AgentArticle.module.css'

const index = () => {
    return (
        <div className={styles.agentArticle}>

            <div className={styles.postArticle}>
                <div className={styles.ask}><h2>Articles posted by you</h2></div>
                <div className={styles.right}><button>Write New Articles</button></div>
            </div>

            <div className={styles.questions}>
                <p className={styles.PText}>Build your profile to increase your ranking in the search
                    results by publishing quality tax-related articles.
                    Publishing quality articles will increase your reputation
                    on our site; increase your profile followings on our site;
                    get your profile in front of more clients.</p>

                <div className={styles.posts}>
                    <div className={styles.leftPost}>
                        <p>1.</p>
                        <p id={styles.p}>ARTICLES OF THE MODEL CONVENTION WITH RESPECT TO TAXES ON INCOME AND ON CAPITAL</p>
                    </div>
                    <div className={styles.date}>
                        <p>21 October, 2021</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default index