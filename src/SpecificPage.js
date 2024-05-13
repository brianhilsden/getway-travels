import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SpecificPage = () => {
  const navigate = useNavigate()
  const params = useParams();
  const specificPageid = params.id

  const [SpecificPage, setSpecificPage] = useState({})
  const [ , , , ,setComponent,loggedIn] = useOutletContext()

  const handleBookNow = () => {
    if(loggedIn){
      alert("You shall be contacted soon via email for confirmation and payment details")
      navigate("/getway-travels")
    }
    else{
      alert("Kindly log in first")
    }

  };

  
  useEffect(()=>{
    fetch(`https://getway-travels-json.onrender.com/packages/${specificPageid}`)
    .then(res=>res.json())
    .then(data=> setSpecificPage(data))
   
    setComponent("specificPage")
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
    .then(()=>setSpecificPage(prev=>({...prev,wishlist:true})))
  
    }
    else{
      fetch(`https://getway-travels-json.onrender.com/packages/${packageSaved.id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json"
        },
        body:JSON.stringify({
          wishlist:false
        })
      }).then(()=>setSpecificPage(prev=>({...prev,wishlist:false})))}}
  return (
    <div className="container-fluid" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <div style={{height:"9.3vh"}}></div>
      <h1 className='text-center'>{SpecificPage.name}</h1>
      <div className='d-flex align-items-center'>
      <img src={SpecificPage.image} width="100%" height="50vh" className='ms-2' alt="Travel destination" style={{ top: 0, left: 0, order: -1, width: '100%', height: '50vh' }} />
              <p className='ms-4'>DESCRIPTION: {SpecificPage.description} </p>
      </div>
       
              <p style={{fontFamily: "Arial, sans-serif", fontSize: "16px", color: "success", padding: "10px", border: "2px solid #F76C6C", borderRadius: "8px", backgroundColor: "#FFF1F1"}}>ITINERARY: {SpecificPage.itinerary}</p>
              <p>price: {SpecificPage.price}</p>
              <button className='btn btn-primary' onClick={handleBookNow} style={{ marginRight: '10px' }}>Book Now</button>
              <button className='btn btn-success' onClick={()=>addToWishlist(SpecificPage)} style={{ marginRight: '10px' }}>{SpecificPage.wishlist ? "Remove from Wishlist" : "Add to Wishlist"}</button>
    </div>
   );
 

};
export default SpecificPage