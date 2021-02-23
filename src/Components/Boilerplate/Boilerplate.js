import React from "react";
import { Header, Footer } from "..";

//Main template for the page
export function Boilerplate({ children }) {
  return (
    <div className="BoilerPlateWrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Boilerplate;
