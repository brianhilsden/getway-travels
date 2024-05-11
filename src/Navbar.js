import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import logo from "./—Pngtree—summer coast vacation logo_5462462.png";

function Navbar({search,setSearch,color,setColor,showSearchBar,component,setShowSearchBar}){

  // Function to handle changes in the search input
  function handleChange(e) {
    setSearch(e.target.value);
  }

  // Function to handle the search submission
  function handleSearch(e) {
    e.preventDefault();
    setTimeout(() => {
      document
        .querySelector("#packages")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const navigate = useNavigate()

  // Effect hook to add/remove event handler for navbar color changes on scroll
  useEffect(() => {
    const handleScroll = () => {
    
    const lineargradient = window.scrollY > 600 ? "linear-gradient(112.1deg, rgba(32, 38, 57, 0.96) 19.4%, rgba(63, 76, 119, 0.96) 70.2%)" : "";
     
     setColor(prev => ({...prev, lineargradient: lineargradient}))}

    if(component === "landing"){
      window.addEventListener("scroll", handleScroll);
    }
    else{
      setShowSearchBar(false)
      if(component == "contactUs" || component == "feedbackForm"){
            setColor(prev => ({...prev, lineargradient: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)", text: "white"}))}
        else{
          setColor(prev => ({...prev,nav:"transparent",text:"white",lineargradient:""}))
        }
    }
    console.log(component);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [component]);

  return(
    <nav
    class="navbar navbar-expand-lg navbar-light"
    style={{
      position: "fixed",
      width: "100%",
      zIndex: 10,
      backgroundColor: color.nav,
      backgroundImage:color.lineargradient,
      color: "white",
      fontSize: "larger",
    }}
  >
    <div class="container-fluid">
      <div
        class="navbar-brand ms-4"
        onClick={() =>{ navigate("/getway-travels")}}
        style={{
          color: color.text,
          fontSize: "35px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "60px" }} /> Getway
        Travels
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ color: color.text }}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              style={{ color: color.text, cursor: "pointer" }}
              onClick={() => navigate("/getway-travels")}
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              style={{ color: color.text, cursor: "pointer" }}
              onClick={() => navigate("/getway-travels/wishlist")}
            >
              WishList
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              onClick={() => { navigate("/getway-travels/login")}}
              style={{ color: color.text, cursor: "pointer" }}
            >
              Login
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              style={{ color: color.text, cursor: "pointer" }}
              onClick={() => navigate("/getway-travels/signUp")}
            >
              SignUp
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: color.text }}
            >
              Contact Us
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a
                  class="dropdown-item"
                  onClick={() => navigate("/getway-travels/contactUs")}
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a class="dropdown-item" onClick={() => navigate("/getway-travels/feedbackForm")} style={{ cursor: "pointer" }}>
                  Share your feedback
                </a>
              </li>
             
             
            </ul>
          </li>
        </ul>

        {showSearchBar && <form class="d-flex" onSubmit={handleSearch}>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={handleChange}
            style={{
              color: color.text,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              fontSize: "18px",
              padding: "7px 8px"
            }}
          />

          <button
            type="submit"
            style={{
              color: color.text,
              fontSize: "18px",
              padding: "5px 1px"
            }}
          >
            Search
          </button>
        </form>}
      </div>
    </div>
  </nav>)
}
export default Navbar