import React from "react";
import { Link } from "react-router-dom";
import slider1 from "./../../assets/astro/images/banner/demoslider.jpg";

const HomeSlider = () => <Hslider />;

const Hslider = () => (
  <section className="home-banner">
    <Link>
      <img src={slider1} alt="Los Angeles" />
    </Link>
    <div className="banner-services-icons">
      <ul>
        <li>
          <Link to="talk-astrologer">
            <img
              src="https://rgyan.com/public/uploads/2019-04/astology.jpg"
              alt="img"
            />
            <span>Talk Astrologer</span>
          </Link>
        </li>
        <li>
          <Link to="talk-astrologer">
            <img
              src="https://rgyan.com/public/uploads/2019-09/health.jpg"
              alt="img"
            />
            <span>Chat Astrologer</span>
          </Link>
        </li>
        <li>
          <Link to="muhurat">
            <img
              src="https://rgyan.com/public/uploads/2019-04/suvichar.jpg"
              alt="img"
            />
            <span>Shubh Muhurat</span>
          </Link>
        </li>
        <li>
          <Link to="micro-vastu">
            <img
              src="https://rgyan.com/public/uploads/2019-04/spirituals.jpg"
              alt="img"
            />
            <span>Micro Vastu</span>
          </Link>
        </li>
      </ul>
    </div>
  </section>
);
export default HomeSlider;
