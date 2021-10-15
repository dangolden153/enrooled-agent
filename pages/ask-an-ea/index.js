import React from 'react'
import { Container } from 'react-bootstrap';
import styles from '../../styles/ea-listings/Askea.module.scss'

const index = () => {
    return (
        <div className={styles.askEA}>
            <h2 className={styles.ask}>Questions</h2>
            <div className={styles.questions}>
                <Container>
                    <p className={styles.text}>Earn reputation points and build your profile by providing answers to
                        simple tax enquiries posted by our users.</p>
                    <p className={styles.text}>The fastest way to promote your profile and top our search results is by
                        giving answers to tax enquiries posted by our site users. You earn a rep score (a determining
                        factor used to order our search result) for every question you answer.</p>
                </Container>
                <div className={styles.answers}>
                    <div className={styles.left}>
                        <p className={styles.P1}><b>Question: Test Question</b></p>
                        <button>Not Answered</button>
                    </div>

                    <div className={styles.right}>
                        <button>Answer Question</button>
                    </div>
                </div>

                <div className={styles.answers}>
                    <div className={styles.left}>
                        <p className={styles.P1}><b>Question: Test Question</b></p>
                        {/* <button>Not Answered</button> */}
                    </div>

                    <div className={styles.right}>
                        <button>View Question</button>
                    </div>
                </div>

                <div className={styles.answers}>
                    <div className={styles.left}>
                        <p className={styles.P1}><b>Question: Test Question</b></p>
                        <button>Not Answered</button>
                    </div>

                    <div className={styles.right}>
                        <button>Answer Question</button>
                    </div>
                </div>

                <div className={styles.answers}>
                    <div className={styles.left}>
                        <p className={styles.P1}><b>Question: Test Question</b></p>
                        {/* <button>Not Answered</button> */}
                    </div>

                    <div className={styles.right}>
                        <button>View Question</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default index
