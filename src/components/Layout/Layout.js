import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      {/* Classname here will serve as props, so we can style the header from it's own comp, we should do the same for footer when it's ready
       */}
      <NavBar />

      <main className="  ">{children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
