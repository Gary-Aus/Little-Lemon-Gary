import React from "react";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import Chicago from "../components/Chicago";

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <CallToAction />
      <Specials />
      <Testimonials />
      {/* <Chicago /> */}
    </>
  );
}
