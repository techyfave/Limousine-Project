import React, { useEffect } from "react";
import Head from "../components/head/Head";
import Wedding from "../components/wedding/Wedding";
import Wedding2 from "../components/wedding/Wedding2";

function Weddingpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <Head text="Wedding Transportation Service" styling="head" />
      <Wedding />
      <Wedding2 />
    </div>
  );
}

export default Weddingpage;
