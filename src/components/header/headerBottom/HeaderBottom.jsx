import React from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import halol from "../../../assets/halol nasiya-logo.png";
import { FiChevronDown } from "react-icons/fi";

function HeaderBottom() {
  return (
    <div className="header_bottom">
      <Link className="halol-nasiya" to={"/"}>
        <img
          className="halol-nasiya-logo"
          src={halol}
          alt="halol-nasiya-logo"
        />
        Halol nasiya
      </Link>
      <Link to={"/"}>Elektronika</Link>
      <Link to={"/"}>Maishiy texnika</Link>
      <Link to={"/"}>Kiyim</Link>
      <Link to={"/"}>Poyabzallar</Link>
      <Link to={"/"}>Aksessuarlar</Link>
      <Link to={"/"}>Go'zallik</Link>
      <Link to={"/"}>Salomatlik</Link>
      <Link to={"/"}>Uy-ro'zg'or-buyumlari</Link>
      <Link to={"/"}>Qurilish va ta'mirlash</Link>
      <Link to={"/"}>Avtotovarlar</Link>
      <button className="yana">
        Yana <FiChevronDown />{" "}
      </button>
    </div>
  );
}

export default HeaderBottom;
