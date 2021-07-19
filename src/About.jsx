import React from "react";
import Card from "./card";
import Sdata from "./Sdata";
const About = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Welcome!</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key="ind"
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
