import React from "react";
import Card from "../component/Card/Card";
import SerData from "../Data/SerData";

function Services() {
  return (
    <>
      <div className="my-5 text-center">
        <h1>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {SerData.map((val, index) => {
                return (
                  <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
