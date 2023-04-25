import { useEffect } from "react";

import Layout from "@/components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return (
    <Layout className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
