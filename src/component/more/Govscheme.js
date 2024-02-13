import React from "react";
import { Link } from "react-router-dom";
import './more.css'

const Govscheme = () => {
  const Scrollup = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <>
      <div className="heading">
        <h2>Government Schemes</h2>
      </div>
      <ol>
          <div className="onlytxt">
        <li>
            <p>Free Education Scheme: Jawahar Navodaya Vidyalaya -</p>
            <Link className="dropdown-item" to="/navodaya">
              Read More
            </Link>
        </li>
          </div>
          <div className="onlytxt">
        <li>
            <p>Free education scheme: Vidyagyan School -</p>
            <Link onClick={Scrollup} className="nav-link active " to="/news7">
              Read More
            </Link>
        </li>
          </div>
      </ol>
    </>
  );
};

export default Govscheme;
