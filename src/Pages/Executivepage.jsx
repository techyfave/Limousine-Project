import React, { useEffect } from "react";
import Executive from "../components/executive/Executive";
import Head from "../components/head/Head";

function Executivepage() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Head text="Executive Transportation Service" styling="head" />
      <Executive />
    </div>
  );
}

export default Executivepage;