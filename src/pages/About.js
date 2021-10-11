import React from "react";
import CommonLanding from "../component/CommonLanding";
import web from "../../src/images/aboutUs.jpg";

function About() {
  return (
    <>
      <CommonLanding
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btnName="Contact Us"
      />
    </>
  );
}

export default About;
