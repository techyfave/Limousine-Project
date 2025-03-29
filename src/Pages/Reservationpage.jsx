import React, { useEffect } from "react";
import Reservation from "../components/reservation/Reservation";
import Head from "../components/head/Head";

function Reservationpage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Head
        text="Reservation"
        styling="head"
        textStyle="text"
        bgOverlay="bg-overlay"
      />
      <Reservation />
    </div>
  );
}

export default Reservationpage;
