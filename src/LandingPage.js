import { useNavigate } from "react-router-dom";
import Slideshow from "./Slideshow";
import logo from "./—Pngtree—summer coast vacation logo_5462462.png";
import { useState } from "react";

function LandingPage() {
  const travelData = [
    {
      name: "Romantic Paris",
      price: "$2999",
      description:
        "Explore the city of love with our exclusive 5-day romantic getaway to Paris.",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sunny Bahamas",
      price: "$3499",
      description:
        "A week of sun, sand, and the sea in the beautiful islands of the Bahamas.",
      image:
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Adventure in New Zealand",
      price: "$3999",
      description:
        "Get ready for adventure in the landscapes of New Zealand, perfect for thrill-seekers.",
      image:
        "https://plus.unsplash.com/premium_photo-1661884830822-0e4617bdcfce?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cultural Tour of Japan",
      price: "$4499",
      description:
        "Experience the rich culture and history of Japan with our 10-day guided tour.",
      image:
        "https://plus.unsplash.com/premium_photo-1664476291505-93b2ef4256ac?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Discover Italy",
      price: "$2999",
      description:
        "Immerse yourself in the art, food, and history of Italy with our comprehensive 7-day tour.",
      image:
        "https://images.unsplash.com/photo-1629919677440-80d25ab03b79?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Egyptian Mysteries",
      price: "$3599",
      description:
        "Explore the ancient wonders of Egypt with our detailed exploration tour.",
      image:
        "https://images.unsplash.com/photo-1656393139305-cd0eeafc47a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Wildlife Safari in Kenya",
      price: "$4199",
      description:
        "Get close to nature with our thrilling wildlife safari in the heart of Kenya.",
      image:
        "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Relaxing Bali Escape",
      price: "$3899",
      description:
        "Unwind on the serene beaches of Bali with our relaxing 9-day retreat.",
      image:
        "https://images.unsplash.com/photo-1657282646325-deb2979c7d09?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Historical Greece Journey",
      price: "$3599",
      description:
        "Step back in time with our historical tour around Greece's famous ancient sites.",
      image:
        "https://plus.unsplash.com/premium_photo-1661963720399-b0d05bee9005?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const navigate = useNavigate();
  
  const [search, setSearch] = useState("");
  const [wishlistTruth,setWishListTruth] = useState(false)
  const [dataToDispay,setDataToDisplay] = useState(travelData)

  function handleChange(e){
    setSearch(e.target.value)
    if(e.target.value === ""){
      setDataToDisplay(travelData)
    }
  }
  function handleSearch(e) {
    e.preventDefault();
    setDataToDisplay(travelData.filter(item => {
      if (search.length > 0) {
        return (item.name.toLowerCase().includes(search.toLowerCase())|| item.description.toLowerCase().includes(search.toLowerCase()));
      } else {
        return item;
      }
    }));
    setTimeout(() => {
      document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
  console.log(search);
  console.log(dataToDispay);

  return (
    <div style={{ background: "whitesmoke" }}>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 10,
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <div class="container-fluid">
          <div
            class="navbar-brand ms-4"
            onClick={() => navigate("/")}
            style={{
              color: "white",
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
            style={{ color: "white" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button
                  class="nav-link active"
                  aria-current="page"
                  style={{ color: "white" }}
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  style={{ color: "white" }}
                  onClick={() => navigate("/wishlist")}
                >
                  WishList
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  style={{ color: "white" }}
                  onClick={() => navigate("/contactUs")}
                >
                  Contact Us
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  onClick={() => navigate("/login")}
                  style={{ color: "white" }}
                >
                  Login
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  style={{ color: "white" }}
                  onClick={() => navigate("/signUp")}
                >
                  SignUp
                </button>
              </li>
            </ul>
            <form class="d-flex" onSubmit={handleSearch}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleChange}
                style={{
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              />
              <button
                class="btn btn-outline-success"
                type="submit"
                style={{ color: "white" }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Slideshow />
      <div className="d-flex flex-wrap" >

        {dataToDispay.map((data) => (
          <div className="card" style={{ width: "25rem", margin: "1rem", transition: "transform 0.6s", cursor: "pointer" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"} id="packages">
            <img
              src={data.image}
              className="card-img-top"
              alt={data.name}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              onClick={() => navigate("/specificPage")}
            />
            <div className="card-body">
              <h5 className="card-title">{data.name} ♡</h5>
              <p className="card-text">{data.description}</p>
              <p className="card-text">
                <small className="text-muted">{data.price}</small>

              </p>



            </div>
          </div>
        ))}</div>

    </div>
  );
}
export default LandingPage;