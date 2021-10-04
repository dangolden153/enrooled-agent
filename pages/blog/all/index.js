import React from 'react'
import Articles from '../../../components/Articles'
import News from '../../../components/News'
import styles from '../../../styles/blog/NewsAndArticles.module.scss'

const index = () => {
    return (
        <div className={`${styles.newsAndArticles}`}>
            <div className={`${styles.header} d-flex flex-column`}>
                <h1>News & Articles</h1>
                <hr />
                <h4>All News</h4>
            </div>

            <News />

            <div className={`${styles.header} d-flex flex-column`}>
                <hr />
                <h4>All Articles</h4>
            </div>

            <Articles />

        </div>
    )
}

export default index
