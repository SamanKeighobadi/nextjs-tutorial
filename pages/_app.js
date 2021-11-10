import "../styles/globals.css";
import Mainlayout from "../components/layouts/mainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  );
}

export default MyApp;
