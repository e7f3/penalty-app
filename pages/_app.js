import Layout from "../components/Layout.jsx";
import DataProvider from "../context/dataContext.js";
import "../styles/style.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}
