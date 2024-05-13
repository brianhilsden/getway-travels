import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import logo from "./—Pngtree—summer coast vacation logo_5462462.png";
import { auth } from "./firebase";
import { onAuthStateChanged,signOut } from "firebase/auth";

function Navbar({search,setSearch,color,setColor,showSearchBar,component,setShowSearchBar,loggedIn,setLoggedIn}){
  const navigate = useNavigate()

  // Function to handle changes in the search input
  function handleChange(e) {
    setSearch(e.target.value);
  }

  // Function to handle the search submission
  function handleSearch(e) {
    e.preventDefault();

     const packagesElement = document.querySelector("#packages");
    if (packagesElement) {
      setTimeout(() => {
        packagesElement.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      console.error("Element with ID 'packages' not found.");
   
  }
  }

  function handleLogout(){
    signOut(auth).then(()=>{
      setLoggedIn(false)
      navigate("/getway-travels")
    }).catch((error)=>{
      console.log(error);
    })
  }

  
  // Effect hook to add/remove event handler for navbar color changes on scroll
  useEffect(() => {
    const handleScroll = () => {
      const lineargradient = window.scrollY > 600 ? "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50,0.97) 0%, rgb(0, 0, 0,0.97) 99.4%)" : "";
      setColor(prev => ({...prev, lineargradient: lineargradient}))}

    if(component === "landing"){
      window.addEventListener("scroll", handleScroll);
    }
    else{
      setShowSearchBar(false)
      if(component == "contactUs" || component == "feedbackForm"){
            setColor(prev => ({...prev, lineargradient: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)", text: "white"}))}
        else{
          setColor(prev => ({...prev,text:"white",lineargradient:"radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50,0.65) 0%, rgb(0, 0, 0,0.65) 99.4%)"}))
        }
    }
 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [component]);



  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
  
          setLoggedIn(true)
        } else {
   
          setLoggedIn(false)
         
        }
      });
     
}, [])

  return(
    <nav
    className="navbar navbar-expand-lg navbar-light"
    style={{
      position: "fixed",
      width: "100%",
      zIndex: 10,
      backgroundColor: color.nav,
      backgroundImage:color.lineargradient,
      color: "white",
      fontSize: "larger",
      height:"10vh"
    }}
  >
    <div className="container-fluid">
      <div
        className="navbar-brand ms-4"
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
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ color: color.text }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              style={{ color: color.text, cursor: "pointer" }}
              onClick={() => navigate("/getway-travels")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: color.text, cursor: "pointer" }}
              onClick={() => navigate("/getway-travels/wishlist")}
            >
              WishList
            </a>
          </li>


          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: color.text }}
            >
              Contact Us
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => navigate("/getway-travels/contactUs")}
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => navigate("/getway-travels/feedbackForm")} style={{ cursor: "pointer" }}>
                  Share your feedback
                </a>
              </li>


            </ul>
          </li>
          {!loggedIn && <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => { navigate("/getway-travels/login")}}
              style={{ color: color.text, cursor: "pointer" }}
            >
              Login
            </a>
          </li>}
          {!loggedIn && <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: color.text, cursor: "pointer" }}
              onClick={() => navigate("/getway-travels/signUp")}
            >
              SignUp
            </a>
          </li>}
          {loggedIn && <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: color.text, cursor: "pointer" }}
              onClick={handleLogout}
            >
              Logout
            </a>
          </li>}
        </ul>

        {showSearchBar && <form className="d-flex" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={handleChange}
            style={{
              color: color.text,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              fontSize: "14px",
              padding: "8px 5px"
            }}
          />

          <button
            type="submit"
            style={{
              color: color.text,
              fontSize: "14px",
              padding: "8px 5px"
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