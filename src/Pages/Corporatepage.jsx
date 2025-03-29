import React, {useEffect} from "react";
import Corporate from "../components/corporate/Corporate";
import Head from "../components/head/Head";

function Corporatepage() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <Head text="Corporate Transportation Service" styling="head" />
      <Corporate />
    </div>
  );
}

export default Corporatepage;
