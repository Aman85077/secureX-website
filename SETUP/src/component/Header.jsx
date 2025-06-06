import React, { useEffect, useState } from "react";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import SummaryApi from "../common";
import { useCart } from "../pages/CartProvider";
function Header() {
  const navigate = useNavigate();
  const { cartCount, setCartCount } = useCart();
  const getCookieUser = localStorage.getItem("userInfo");
  const userInfo = getCookieUser ? JSON.parse(getCookieUser) : null;
  const fetchCartData = async () => {
    try {
      const res = await axios.get(SummaryApi.getAllCart.url, {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      });
      if (res.data.status === 200) {
        setCartCount(res.data.body.length);
      }
    } catch (error) {
      console.error("Error fetching cart data", error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      fetchCartData();
    }
  }, [userInfo]);

  const handleLogout = () => {
    localStorage.clear("userInfo");
    setCartCount(0); // Reset cart count on logout
    navigate("/Login");
    window.location.reload();
  };
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5">
        <div className="row gx-4 d-none d-lg-flex">
          <div className="col-lg-6 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <div className="btn-sm-square rounded-circle bg-primary me-2">
                <small className="fa fa-map-marker-alt text-white" />
              </div>
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <div className="btn-sm-square rounded-circle bg-primary me-2">
                <small className="fa fa-envelope-open text-white" />
              </div>
              <small>info@example.com</small>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <div className="btn-sm-square rounded-circle bg-primary me-2">
                <small className="fa fa-phone-alt text-white" />
              </div>
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <div className="btn-sm-square rounded-circle bg-primary me-2">
                <small className="far fa-clock text-white" />
              </div>
              <small>Mon - Fri : 9AM - 9PM</small>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h2 className="m-0 text-primary">Securex</h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-4 py-lg-0">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/About" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/Service" className="nav-item nav-link">
              Service
            </NavLink>
            <NavLink to="/Project" className="nav-item nav-link">
              Products
            </NavLink>
            <NavLink to="/Contact" className="nav-item nav-link">
              Contact
            </NavLink>
            {userInfo?.role === 0 ? (
              <NavLink to="/Myorder" className="nav-item nav-link">
                My Orders
              </NavLink>
            ) : (
              ""
            )}
            {userInfo?.role === 0 ? (
              <div className="position-relative me-2 my-3">
                <NavLink
                  to="/Cart"
                  className="btn btn-outline-primary rounded-circle"
                >
                  <i className="fas fa-shopping-cart"></i>
                </NavLink>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount ? cartCount : 0}
                  </span>
                )}
              </div>
            ) : (
              ""
            )}
            {userInfo?.role === 1 ? (
              <NavLink to={"/AdminDashboard"} className="nav-item nav-link">
                Admin Dashboard
              </NavLink>
            ) : (
              ""
            )}
            {userInfo?.token ? (
              <NavLink onClick={handleLogout} className="nav-item nav-link">
                Logout
              </NavLink>
            ) : (
              <>
                <NavLink to="/Login" className="nav-item nav-link">
                  Login
                </NavLink>
                <NavLink to="/Register" className="nav-item nav-link">
                  Registration
                </NavLink>
              </>
            )}
          </div>
          <div className="h-100 d-lg-inline-flex align-items-center d-none">
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-0"
              href
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}

export default Header;
