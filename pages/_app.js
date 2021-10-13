import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import PageLayout from "../components/layout/PageLayout";
import DashboardLayout from "../components/layout/dashboard/DashboardLayout";
import { wrapper } from "../src/redux/store";
import { useEffect } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  const router = useRouter()
  switch (router.pathname) {
    case "/auth/login":
      return <Component {...pageProps} />;
    case "/auth/register":
      return <Component {...pageProps} />;
    case "/auth/reset-password":
      return <Component {...pageProps} />;
    case "/dashboard":
      return (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      )
    case "/dashboard/account":
      return (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      )
    case "/dashboard/articles":
      return (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      )
    case "/dashboard/help":
      return (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      )
    default:
      return (
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      );
  }
}

export default wrapper.withRedux(MyApp);
