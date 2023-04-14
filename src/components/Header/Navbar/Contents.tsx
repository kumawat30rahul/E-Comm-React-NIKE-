import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contents.css";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

function Contents() {
  const [activeSubmenu, setActivesSubmenu] = useState("");

  const showSubmenu = (type: any, e: any) => {
    if (activeSubmenu === type) {
      setActivesSubmenu("");
    } else {
      setActivesSubmenu(type);
    }
  };

  return (
    <div>
      <div className="main_contents">
        <ul>
          <Link to="/" className="contents_links">
            <li className="one">HOME</li>
          </Link>
          <Link to={`/shop/Mens`} className="contents_links">
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
      </div>
    </div>
  );
}

export default Contents;
