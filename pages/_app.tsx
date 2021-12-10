import { useEffect } from "react";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BottomNavigationBar {...pageProps} />
    </>
  );
}

export default MyApp;
