import AgentDashboardListing from "../../components/AgentDashboardListings";
import UserDashboardListing from "../../components/UserDashboardListing";
import styles from "../../styles/dashboard/Dashboard.module.scss";

const index = () => {
  return (
    <div className={`container ${styles.dashboard}`}>
      <h1>Welcome back, Jane.</h1>

      {/* IF USER */}
      <UserDashboardListing />

      {/* IF AGENT */}
      {/* <AgentDashboardListing /> */}
    </div>
  );
};

export default index;
