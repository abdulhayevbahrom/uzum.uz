import React from "react";
import "./HeaderTop.css";
import { Link } from "react-router-dom";
import { BsGeoAlt } from "react-icons/bs";
import flag from "../../../assets/flag.png";

function HeaderTop() {
  return (
    <div className="header_top">
      <p className="hidden-header-p">
        Buyurtmangizni 1 kunda bepul yetkazib beramiz!
      </p>
      <div className="location-info">
        <button className="header-top-location">
          <BsGeoAlt />
          <span>
            Shahar: <u>Namangan</u>{" "}
          </span>
        </button>
        <Link to={"/delivery"}>Topshirish punktlari</Link>
      </div>

      <div className="header-right">
        <div className="savollar-buyurtmalar">
          <Link to={"/savollar"}>Savol-javoblar</Link>
          <Link to={"/buyurtmalar"}>Buyurtmalarim</Link>
        </div>
        <button className="language">
          <img className="flag" src={flag} alt="flag" />
          O'zbekcha
        </button>
      </div>
    </div>
  );
}

export default HeaderTop;
