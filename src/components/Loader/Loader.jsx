import React from 'react';
import logo from "../../images/loading-35.gif";

import "./Loader.css";

function Loader() {
  return (
    <section className="loader">
      <img src={logo} alt="гиф загрузка" className="loader__gif" />
    </section>
  );
}

export default Loader;
