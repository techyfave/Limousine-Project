import React, { useEffect } from "react";
import Head from "../components/head/Head";
import Wedding from "../components/wedding/Wedding";
import Wedding2 from "../components/wedding/Wedding2";
import Nextstep from "../components/corporate/Nextstep";

function Weddingpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <Head
        text="Wedding"
        styling="head"
        textStyle="text"
        bgOverlay="bg-overlay"
      />
      <Wedding />
      <Wedding2 />
      <Nextstep
        text="The Perfect Step to Your Forever"
        parText="Prepare to make your special day unforgettable with our luxurious limousine hire services. Book your wedding transportation with us for an elegant and romantic experience."
      />
    </div>
  );
}

export default Weddingpage;
