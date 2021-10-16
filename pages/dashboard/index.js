import AgentDashboardListing from "../../components/AgentDashboardListings";
import UserDashboardListing from "../../components/UserDashboardListing";
import styles from "../../styles/dashboard/Dashboard.module.scss";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

const index = ({ session }) => {
  const { user } = session;
  const router = useRouter();

  console.log("!!!", session);

  return (
    <div className={`container ${styles.dashboard}`}>
      <h1>Welcome back, {user?.first_name}</h1>

      {/* IF USER */}
      <UserDashboardListing />

      {/* IF AGENT */}
      {/* <AgentDashboardListing /> */}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};

export default index;
