import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import HeaderTop from './headerTop/HeaderTop'
import HeaderBottom from './headerBottom/HeaderBottom'
import logo from '../../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'

function Header() {
    return (
        <header>
            <HeaderTop />
            <div className="header_center">

                <div className="header_logo">
                    <img src={logo} alt="" />
                </div>

                <button className="header_katalog">
                    <FaBars />
                    Katalog
                </button>

                <div className="header_searchbar">
                    <input type="search" placeholder='mahsulot izlash' />
                    <button>
                        <GoSearch />
                    </button>
                </div>

                <Link to={'/user'} className="header_user">
                    <BiUser />
                    Bahromjon
                </Link>

                <Link to={'/user'} className="header_user">
                    <AiOutlineHeart />
                    Sevimlilar
                </Link>

                <Link to={'/user'} className="header_user">
                    <BsCart />
                    Savat
                </Link>

            </div>
            <HeaderBottom />
        </header>
    )
}

export default Header
