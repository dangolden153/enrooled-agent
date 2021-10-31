import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.scss";
import "../styles/nprogress.scss";
import PageLayout from "../components/layout/PageLayout";
import DashboardLayout from "../components/layout/dashboard/DashboardLayout";
import { wrapper } from "../src/redux/store";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ToastProvider } from "react-toast-notifications";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import nProgress from "nprogress";
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  const router = useRouter();
  const state = true;

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
      return (
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      );
    case "/auth/reset-password/success":
      return (
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      );
    case "/auth/register/success":
      return (
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      );
    case "/auth/reset-password/reset":
      return (
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      );
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
    case "/dashboard/help":
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
    case "/dashboard/articles/new":
      return (
        <ToastProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </ToastProvider>
      );
    default:
      return (
        <Provider>
          <ToastProvider>
            <PageLayout>
              <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <Component {...pageProps} />
              </AnimatePresence>
            </PageLayout>
          </ToastProvider>
        </Provider>
      );
  }
}

export default wrapper.withRedux(MyApp);
