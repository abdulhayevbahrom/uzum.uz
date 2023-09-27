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
  const validNumber = new RegExp("^[0-9].{8,}$");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState(user ? user.password : "");
  const [name, setName] = useState(user ? user.name : "");
  const [surname, setSurname] = useState(user ? user.surname : "");
  const [number, setNumber] = useState(user ? user.number : "");
  const [showPassword, setShowpassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !validPassword.test(password) ||
      !validName.test(name) ||
      !validNumber.test(number) ||
      !validSurname.test(surname)
    ) {
      toast.error("username or password incorrect", {
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
      toast.success("loged in successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        hideProgressBar: true,
      });
      setOpenRegister(false);
    }
  };
  function logoutHandler() {
    window.confirm("Do you really want to log out?") &&
      localStorage.removeItem("user");
    setOpenRegister(false);
  }

  return (
    <div className="RegisterForm">
      <div className="form_container">
        <BiLogOut
          title="Log out"
          className="form_logout"
          onClick={logoutHandler}
        />
        <MdClose
          className="form_close"
          onClick={() => setOpenRegister(false)}
        />
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>

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
              <span>Remember me</span>
            </span>
          </div>
          <div>
            <button className="button" type="submit">
              Submit
            </button>
          </div>
          <div className="login_signup">
            Already have an account?
            <Link to={"/login"}> Login</Link>
          </div>
        </form>
      </div>
      <div onClick={() => setOpenRegister(false)} className="overlay"></div>
    </div>
  );
}

export default RegisterForm;
