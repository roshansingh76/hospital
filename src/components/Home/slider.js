import React from "react";
import { Link } from "react-router-dom";
import slider1 from "./../../assets/banner/JYT-Banner.jpg";
import img1 from "./../../assets/banner/Chat.png";
import img2 from "./../../assets/banner/Horoscope.png";
import img3 from "./../../assets/banner/Muhurat.png";
import img4 from "./../../assets/banner/Vastu.png";


const HomeSlider = () => <Hslider />;

const Hslider = () => (
  <section className="home-banner">
    <Link>
      <img src={slider1} alt="JYT-Banner.jpg" />
    </Link>
    <div className="banner-services-icons">
      <ul>
        <li>
          <Link to="talk-astrologer">
             <img src={img1} alt="Chat.png" />
            <span>Chat Astrologer</span>
          </Link>
        </li>
        <li>
          <Link to="talk-astrologer">
             <img src={img2} alt="Horoscope.png" />
            <span>Free Horoscope</span>
          </Link>
        </li>
        <li>
          <Link to="muhurat">
            <img src={img3} alt="Muhurat.png" />
            <span>Shubh Muhurat</span>
          </Link>
        </li>
        <li>
          <Link to="micro-vastu">
             <img src={img4} alt="Vastu.png" />
            <span>Micro Vastu</span>
          </Link>
        </li>
      </ul>
    </div>
  </section>
);
export default HomeSlider;
