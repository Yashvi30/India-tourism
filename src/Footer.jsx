import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-100 h-100 bg-dark text-light ">
        <section className="footer">
          {/* <div className="col-md-11 col-10 mx-auto"> */}
          <div className="box-container">
            <div className="box">
              <h3>About INDIA</h3>
              <p>
                India has a myriad of landscapes, great heritage and culture,
                varied flora and fauna. The country is the most preferred
                tourist destinations for tourists from all across the world for
                its picturesque landscapes, spectacular waterfalls, habitat of
                the country's largest tiger reserve and home to the warmest
                people on earth.
              </p>
            </div>

            <div className="box" id="extramiddle">
              <h3>Quick links</h3>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/">Services</NavLink>
              {/* <NavLink to="/">Gallery</NavLink> */}
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="box">
              <h3>Follow us</h3>
              <NavLink to="/">Facebook</NavLink>
              <NavLink to="/">Instagram</NavLink>
              <NavLink to="/">Twitter</NavLink>
              <NavLink to="/">Linkedin</NavLink>
            </div>
          </div>

          <h1 class="credit">
            {" "}
            created by <span> Runtime Terror</span> | All rights reserved{" "}
          </h1>
          {/* </div> */}
        </section>
      </footer>
    </>
  );
};
export default Footer;
