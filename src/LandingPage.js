import { useNavigate } from "react-router-dom";
import Slideshow from "./Slideshow";
import { useOutletContext } from "react-router-dom";

import { useEffect} from "react";

function LandingPage() {
  
  const navigate = useNavigate();
  const [dataToDispay,setColor,setData,setShowSearchBar,setComponent, ,sortChoice,setSortChoice] = useOutletContext()
  useEffect(()=>{
    setColor(prev=>({...prev,nav:"transparent",text:"white",lineargradient:""}))
    setShowSearchBar(true)
    setComponent("landing")
  },[])

function addToWishlist(packageSaved){
  if(packageSaved.wishlist === false){
    fetch(`https://getway-travels-json.onrender.com/packages/${packageSaved.id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json"
    },
    body:JSON.stringify({
      wishlist:true
    })
  })
  .then(res=>res.json())
  .then(()=>setData(prevData=>prevData.map(item=>item.id === packageSaved.id?{...item,wishlist:!item.wishlist}:item)))


  }
  else{
    fetch(`https://getway-travels-json.onrender.com/packages/${packageSaved.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },body:JSON.stringify({
        wishlist:false
      })

    }).then(()=>setData(prevData=>prevData.map(item=>item.id === packageSaved.id?{...item,wishlist:!item.wishlist}:item)))
  }
  
}
  
  return (
    <div style={{ background: "whitesmoke" }}>
     
      <Slideshow />
      <select className="form-select mt-2" aria-label="Default select example" value={sortChoice} onChange={(e)=>setSortChoice(e.target.value)}>
        <option>Filter packages by price: </option>
        <option value="descending">Descending order</option>
        <option value="ascending">Ascending order</option>
  
      </select>
      <div className="d-flex flex-wrap justify-content-center">
        {dataToDispay.map((data,index) => (
          <div
          key={index}
            className="card"
            style={{
              width: "25rem",
              margin: "1rem",
              transition: "transform 0.6s",
             
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
              style={{ width: "100%", height: "250px", objectFit: "cover", cursor: "pointer" }}
              onClick={() => navigate(`/getway-travels/specificPage/${data.id}`)}
              
            />
            <div className="card-body">
              <h5 className="card-title"><span onClick={() => navigate(`/getway-travels/specificPage/${data.id}`)} style={{cursor:"pointer"}} >{data.name}</span><span onClick={()=>addToWishlist(data)} style={{cursor:"pointer"}}> {data.wishlist?"❤️":"♡"}</span></h5>
              <p className="card-text" onClick={() => navigate(`/getway-travels/specificPage/${data.id}`)} style={{cursor:"pointer"}}>{data.description.substring(0,206)}...</p>
              <p className="card-text" style={{marginBottom:"10px"}}>
                <small className="text-muted" >{data.price} per person</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LandingPage;
