import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  MdClose,
  MdOutlineContactPhone,
  MdOutlineMailOutline,
  MdLockOutline,
} from "react-icons/md";
import { BsPencilSquare, BsEye, BsEyeSlash } from "react-icons/bs";
import { BiUserPin, BiLogOut } from "react-icons/bi";

function RegisterForm({ setOpenRegister }) {
  let user = JSON.parse(localStorage.getItem("user"));
  const validName = new RegExp("^[A-Z][a-z].{4,}$");
  const validSurname = new RegExp("^[A-Z][a-z].{4,}$");
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{7,16}$");
  const validNumber = new RegExp("^[+0-9].{8,}$"); 
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState(user ? user.password : "");
  const [name, setName] = useState(user ? user.name : "");
  const [surname, setSurname] = useState(user ? user.surname : "");
  const [number, setNumber] = useState(user ? user.number : "");
  const [showPassword, setShowpassword] = useState(false);
  document.title = "Uzum-Register";
  document.body.setAttribute("style", "overflow:hidden");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !validPassword.test(password) ||
      !validName.test(name) ||
      !validNumber.test(number) ||
      !validSurname.test(surname)
    ) {
      toast.error("Yaroqsiz ma'lumot kiritildi", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } else {
      let userData = {
        email: email,
        password: password,
        name: name,
        surname: surname,
        number: number,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success(  !user ? "Ro'yxatdan muvaffaqqiyatli o'tdingiz" : "O'zgarishlar saqlandi" , {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        hideProgressBar: true,
      });
      setOpenRegister(false);
    }
  };
  function logoutHandler() {
    window.confirm("Rostdan ham akkauntdan chiqishni xohlaysizmi?") &&
      localStorage.removeItem("user");
    setOpenRegister(false);
  }

  function handleClose() {
    setOpenRegister(false);
  document.body.setAttribute("style", "overflow:scroll");

  }

  return (
    <div className="RegisterForm">
      <div className="form_container">
        {user && (
          <BiLogOut
            title="Chiqish"
            className="form_logout"
            onClick={logoutHandler}
          />
        )}
        <MdClose
          className="form_close"
          onClick={handleClose}
        />
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>{!user ?  "Ro'yxatdan o'tish"  : 'Malumotlaringiz'}</h2>

          <div className="input_box">
            <input
              title="Katta harf bilan, kamida 3ta belgi"
              type="text"
              placeholder="Ismingiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <BiUserPin className="iconic" />
          </div>
          <div className="input_box">
            <input
              title="Katta harf bilan, kamida 3ta belgi"
              required
              type="text"
              placeholder="Familiyangiz"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <BsPencilSquare className="iconic" />
          </div>
          <div className="input_box">
            <input
              required
              type="text"
              title="Kamida 9ta raqam kiriting"
              placeholder="Telefon raqamingiz"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <MdOutlineContactPhone className="iconic" />
          </div>
          <div className="input_box">
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdOutlineMailOutline className="iconic" />
          </div>
          <div className="input_box">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              title="Kamida 6ta belgi, raqamlar va harflardan iborat bo'lsin"
            />
            <MdLockOutline className="iconic" />
            <span
              onClick={() => setShowpassword(!showPassword)}
              className="show"
            >
              {!showPassword ? <BsEyeSlash /> : <BsEye />}
            </span>
          </div>
          <div className="option_field">
            <span className="checkbox">
              <input type="checkbox" />
              <span>Eslab qolish</span>
            </span>
          </div>
          <div>
            <input className="registerButton" value={user ? "O'zgarishlarni saqlash" : "Ro'yxatdan o'tish"  }type="submit" />
          </div>
          <div className="login_signup">
            Allaqachon ro'yxatdan o'tganmisiz?
            <Link to={"/login"}>Kirish</Link>
          </div>
        </form>
      </div>
      <div onClick={handleClose} className="overlay"></div>
    </div>
  );
}

export default RegisterForm;
