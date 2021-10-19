import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.scss";
import PageLayout from "../components/layout/PageLayout";
import DashboardLayout from "../components/layout/dashboard/DashboardLayout";
import { wrapper } from "../src/redux/store";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ToastProvider } from "react-toast-notifications";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
  }, []);

  const router = useRouter();
  switch (router.pathname) {
    case "/auth/login":
      return (
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      );
    case "/auth/register":
      return (
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      );
    case "/auth/reset-password":
      return <ToastProvider><Component {...pageProps} /></ToastProvider>;
    case "/dashboard":
      return (
        <ToastProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
        </ToastProvider>
      );
    case "/dashboard/account":
      return (
        <ToastProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
        </ToastProvider>
      );
    case "/dashboard/articles":
      return (
        <ToastProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
        </ToastProvider>
      );
    default:
      return (
        <ToastProvider>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ToastProvider>
      );
  }
}

export default wrapper.withRedux(MyApp);
