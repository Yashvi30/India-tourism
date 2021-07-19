import React from "react";
import web from "../src/assets/image/img1.jpg";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Welcome Services page!</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={web} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
