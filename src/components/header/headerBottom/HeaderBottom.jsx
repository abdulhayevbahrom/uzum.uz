import React from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import halol from "../../../assets/halol nasiya-logo.png";
import { FiChevronDown } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
// import Sidebar from "../MediaNav/Sidebar";
import { useDispatch } from "react-redux";
import { OPEN_CATALOG } from "../../../redux/katalog";

function HeaderBottom() {
  const dispatch = useDispatch();

  return (
    <div className="header_bottom">
      <div className="header-bottom-search">
        <GoSearch />
        <input
          className="header-bottom-input"
          type="search"
          placeholder="Mahsulotlar va turkumlar izlash"
        />
      </div>
      <Link className="halol-nasiya" to={"/"}>
        <img
          className="halol-nasiya-logo"
          src={halol}
          alt="halol-nasiya-logo"
        />
        Halol nasiya
      </Link>
      <div className="Header-bottom-links">
        <Link to={"/"}>Elektronika</Link>
        <Link to={"/"}>Maishiy texnika</Link>
        <Link to={"/"}>Kiyim</Link>
        <Link to={"/"}>Poyabzallar</Link>
        <Link to={"/"}>Aksessuarlar</Link>
        <Link to={"/"}>Go'zallik</Link>
        <Link to={"/"}>Salomatlik</Link>
        <Link className="buyumlar" to={"/"}>
          Uy-ro'zg'or-buyumlari
        </Link>
        <Link className="Qurilish" to={"/"}>
          Qurilish va ta'mirlash
        </Link>
        <Link to={"/"}>Avtotovarlar</Link>
      </div>
      <button className="yana" onClick={() => dispatch(OPEN_CATALOG())}>
        Yana <FiChevronDown />
      </button>
      {/* <Sidebar /> */}
    </div>
  );
}

export default HeaderBottom;
