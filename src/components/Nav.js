import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBucketFill } from "react-icons/bs";

const Nav = () => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="nav__left">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="nav__right">
            <Link to="/cart">
              <div className="basket">
                <BsFillBucketFill className="cart-icon" />
                <span>{totalQuantities}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
