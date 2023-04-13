import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contents.css";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

function Contents() {
  const smallScreen = window.matchMedia("(max-width: 768px)").matches;
  const [activeSubmenu, setActivesSubmenu] = useState("");

  const showSubmenu = (type: any, e: any) => {
    console.log(activeSubmenu);

    if (activeSubmenu === type) {
      setActivesSubmenu("");
    } else {
      setActivesSubmenu(type);
    }
  };

  return (
    <div>
      <div className="main_contents">
        {smallScreen ? (
          <ul>
            <Link to="/" className="contents_links">
              <li className="one">HOME</li>
            </Link>
            <div className="contents_links">
              <li
                className={`two ${activeSubmenu === "mens" ? "activeLi" : ""}`}
                onClick={(e: any) => showSubmenu("mens", e)}
              >
                MENS
              </li>
            </div>
            <div className="contents_links">
              <li
                className={`three ${
                  activeSubmenu === "womens" ? "activeLi" : ""
                }`}
                onClick={(e: any) => showSubmenu("womens", e)}
              >
                WOMENS
              </li>
            </div>
            <div className="contents_links">
              <li
                className={`four ${activeSubmenu === "kids" ? "activeLi" : ""}`}
                onClick={(e: any) => showSubmenu("kids", e)}
              >
                KIDS
              </li>
            </div>
            <Link to="/shop/AllProducts" className="contents_links">
              <li className="five">SHOP</li>
            </Link>
          </ul>
        ) : (
          <ul>
            <Link to="/" className="contents_links">
              <li className="one">HOME</li>
            </Link>
            <Link to={`/shop/Mens`} className="contents_links sdfasdfsdf">
              <li className="two">MENS</li>
            </Link>
            <Link to={`/shop/Womens`} className="contents_links">
              <li className="three">WOMENS</li>
            </Link>
            <Link to={`/shop/Kids`} className="contents_links">
              <li className="four">KIDS</li>
            </Link>
            <Link to={`/shop/AllProducts`} className="contents_links">
              <li className="five">SHOP</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Contents;
