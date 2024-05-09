import { useNavigate } from "react-router-dom";
import Slideshow from "./Slideshow";
import { useOutletContext } from "react-router-dom";

import { useEffect, useState} from "react";

function LandingPage() {
  
  const navigate = useNavigate();
  const [dataToDispay,setColor,setData,setShowSearchBar] = useOutletContext()
  useEffect(()=>{
    setColor(prev=>({...prev,nav:"transparent",text:"white"}))
    setShowSearchBar(true)
  },[])

function addToWishlist(packageSaved){
  if(packageSaved.wishlist === false){
    fetch("https://getway-travels-json.onrender.com/wishlist",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json"
    },
    body:JSON.stringify(packageSaved)
  })
  .then(res=>res.json())
  .then(()=>setData(prevData=>prevData.map(item=>item.id === packageSaved.id?{...item,wishlist:!item.wishlist}:item)))


  }
  else{
    fetch(`https://getway-travels-json.onrender.com/${packageSaved.id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
      
    }).then(()=>setData(prevData=>prevData.map(item=>item.id === packageSaved.id?{...item,wishlist:!item.wishlist}:item)))
  }
  
}
  
  return (
    <div style={{ background: "whitesmoke" }}>
     
      <Slideshow />
      <div className="d-flex flex-wrap justify-content-center">
        {dataToDispay.map((data) => (
          <div
            className="card"
            style={{
              width: "25rem",
              margin: "1rem",
              transition: "transform 0.6s",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            id="packages"
          >
            <img
              src={data.image}
              className="card-img-top"
              alt={data.name}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              onClick={() => navigate(`/getway-travels/specificPage/${data.id}`)}
            />
            <div className="card-body">
              <h5 className="card-title">{data.name}<span onClick={()=>addToWishlist(data)}> {data.wishlist?"❤️":"♡"}</span></h5>
              <p className="card-text">{data.description}</p>
              <p className="card-text">
                <small className="text-muted">{data.price} per person</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LandingPage;
