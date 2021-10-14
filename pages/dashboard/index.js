import UserDashboardListing from '../../components/UserDashboardListing'
import styles from '../../styles/dashboard/Dashboard.module.scss'

const index = () => {
    return (
        <div className={styles.dashboard}>
            <h1>Welcome back, Jane.</h1>

            <UserDashboardListing />
        </div>
    )
}

export default index
