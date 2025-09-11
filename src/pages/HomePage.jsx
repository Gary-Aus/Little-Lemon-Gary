import React from "react";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* <h1>HomePage</h1> */}
      <CallToAction />
      <Specials />
      <Testimonials />
    </>
  );
}
