import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const SpecificPage = ({name, image, description, Itinerary, price, onBookNow, onAddToWishlist }) => {
  const params = useParams();
  const specificPageid = params.id
  const [isWishlist, setIsWishlist] = useState([])
  console.log (specificPageid)
  const [SpecificPage, setSpecificPage] = useState({})

  const handleBookNow = () => {
    onBookNow();
  };

  const handleAddToWishlist = () => {
    setIsWishlist(!isWishlist);

    onAddToWishlist();
  };
  useEffect(()=>{
    fetch(`http://localhost:4001/packages/${specificPageid}`)
    .then(res=>res.json())
    .then(data=> setSpecificPage(data))
  },[])
  return (
    <div className="container-fluid" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <h1 className='text-center'>{SpecificPage.name}</h1>
      <div className='d-flex align-items-center'>
      <img src={SpecificPage.image} width="50%" height="50vh" className='ms-2' alt="Travel destination" style={{ top: 0, left: 0, order: -1, width: '50%', height: '50vh' }} />
              <p className='ms-4'>DESCRIPTION: {SpecificPage.description} </p>
      </div>
       
              <p>ITINERARY: {SpecificPage.itinerary}</p>
              <p>price: {SpecificPage.price}</p>
              <button className='btn btn-primary' onClick={handleBookNow} style={{ marginRight: '10px' }}>Book Now</button>
              <button className='btn btn-success' onClick={handleAddToWishlist} style={{ marginRight: '10px' }}>{isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</button>
    </div>
   );
 

};
export default SpecificPage