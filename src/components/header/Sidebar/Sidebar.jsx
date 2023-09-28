import "./Sidebar.css";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";
import BasicExample from "./HeaderAccordion";
import { BsGeoAlt, BsEnvelope, BsBagCheck } from "react-icons/bs";
import flag from "../../../assets/flag.png";
import { AccordionSidebarLinks } from "./HeaderAccordion";
import { TbBookDownload, TbMap } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

function Sidebar({ setOpenSidebar, setOpenRegister }) {
  let userdata = JSON.parse(localStorage.getItem("user"));
  function handlerLogout() {
    window.confirm("Do you really want to log out?") &&
      localStorage.removeItem("user");
    setOpenSidebar(false);
  }
  return (
    <div className="Sidebar">
      <div className="sidebar-top">
        <AiOutlineClose onClick={() => setOpenSidebar(false)} />
        <div onClick={() => setOpenRegister(true)} className="sidebar-top-register">
          {userdata ? (
            <div className="profil">
              <BiUser /> <span>{userdata.name}</span>
            </div>
          ) : (
            <div className="sidebar-top-register">
              <Link>Kirish</Link> / <Link>Ro'yxatdan o'tish</Link>
            </div>
          )}
        </div>
      </div>
      <div className="sidebar-katalog">
        <BasicExample />
      </div>
      <div className="sidebar-links">
        <Link to={"/"}>
          <BsBagCheck />
          Buyurtmalarim
        </Link>
        <Link to={"/heart"}>
          <AiOutlineHeart />
          Saralanganlar
        </Link>
        <button>
          <BsGeoAlt />
          Shahar: Toshkent
        </button>
        <Link to={"/delivery"}>
          <TbMap />
          Topshirish punkti
        </Link>
        <hr />
        <Link to={"/"}>
          <AiOutlineQuestionCircle />
          Savol-javoblar
        </Link>
        <Link to={"/"}>
          <BsEnvelope />
          Biz bilan bog'laning
        </Link>
        <Link to={"/"}>
          <TbBookDownload />
          Uzum ilovasi
        </Link>
        <button className="sidebar-language">
          <img className="flag" src={flag} alt="flag" />
          Sayt tili: O'zbekcha
        </button>
        <hr />
      </div>
      <div className="AccordionSidebarLinks">
        <AccordionSidebarLinks />
      </div>
      {userdata && (
        <span className="sidebar-logout" onClick={handlerLogout}>
          Akkauntdan chiqish
        </span>
      )}
    </div>
  );
}

export default Sidebar;
