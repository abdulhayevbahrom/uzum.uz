import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HeaderTop from "./headerTop/HeaderTop";
import HeaderBottom from "./headerBottom/HeaderBottom";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import { FiX, FiChevronRight } from "react-icons/fi";
import { katalogData } from "../../static/headerData";
import { HiBars3 } from "react-icons/hi2";
import Sidebar from "./Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_CATALOG } from "../../redux/katalog";

function Header() {
  const dispatch = useDispatch();
  const catalogState = useSelector((s) => s.katalog);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <header>
      <HeaderTop />
      <div className="header_center">
        {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} />}
        <div className="header-logo-icon">
          <HiBars3
            onClick={() => setOpenSidebar(!openSidebar)}
            className="open-sidebar"
          />
          <Link to={"/"} className="header_logo">
            <img src={logo} alt="" />
          </Link>
        </div>

        <button
          onClick={() => dispatch(OPEN_CATALOG())}
          className="header_katalog"
        >
          {catalogState ? <FiX /> : <FaBars />}
          Katalog
        </button>
        {/* -------- katalog -------------- */}

        {catalogState && (
          <div className="catalog_wrapper">
            {katalogData.map((katalogItem, index) => (
              <div key={index} className="catalog_wrapper_item">
                {katalogItem.title.icon}
                <p>{katalogItem.title.titleName}</p>
                <FiChevronRight />
                <div className="catalog_wrapper_item_section">
                  <h2>{katalogItem.title.titleName}</h2>
                  <div className="catalog_wrapper_item_section_links">
                    {katalogItem.collection.map((item, index) => (
                      <div key={index}>
                        <h4>{item.collectionItemName}</h4>
                        <ul>
                          {item.collectionItemLinks.map((link_item, index) => (
                            <li key={index}>
                              <Link to={"/"}>{link_item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="header_searchbar">
          <input type="search" placeholder="Mahsulotlar va turkumlar izlash" />
          <button>
            <GoSearch />
          </button>
        </div>

        <div className="header-3links">
          <Link to={"/user"} className="header_user">
            <BiUser />
            <span>Bahromjon</span>
          </Link>

        <Link to={"/heart"} className="header_user">
          {/* {()=> document.title = "Uzum - mahsulotlari kunning ertasiga yetkazib beriladigan ilk Oʻzbekiston savdo maydoni"} */}
          
          <AiOutlineHeart />
          Sevimlilar
        </Link>

          <Link to={"/user"} className="header_user">
            <BsCart />
            <span>Savat</span>
          </Link>
        </div>
      </div>
      <HeaderBottom />
      {/* <Sidebar /> */}
    </header>
  );
}

export default Header;
