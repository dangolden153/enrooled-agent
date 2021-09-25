import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import PageLayout from "../components/layout/PageLayout";
import { wrapper } from "../src/redux/store";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  switch (Component.name) {
    case "Login":
      return <Component {...pageProps} />;
    default:
      return (
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      );
  }
}

export default wrapper.withRedux(MyApp);
