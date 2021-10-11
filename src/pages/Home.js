import React from "react";
import CommonLanding from "../component/CommonLanding";
import web from "../../src/images/img1.png";

function Home() {
  return (
    <>
      <CommonLanding
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
}

export default Home;
