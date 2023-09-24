import "./Sidebar.css";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";
import BasicExample from "./HeaderAccordion";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar-top">
        <AiOutlineClose />
        <div className="sidebar-top-register">
          <Link>Kirish</Link>/ <Link>Ro'yxatdan o'tish</Link>
        </div>
        <div className="sidebar-katalog">
          <BasicExample />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
