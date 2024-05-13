import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './WishlistPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
const WishlistPage = () => {
 const navigate = useNavigate ()
  const [wishlistItems, setWishlistItems] = useState([]);
  const [ , , , ,setComponent] = useOutletContext()

 useEffect(()=>{
  fetch("https://getway-travels-json.onrender.com/packages")
  .then(res=>res.json())
  .then(data=>setWishlistItems(data.filter(item=>item.wishlist === true)))
  setComponent("wishlist")

 },[])

 
  const removeItemFromWishlist = (id) => {
    const updatedWishlistItems = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlistItems);
    fetch(`https://getway-travels-json.onrender.com/packages/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
      },
      body:JSON.stringify({
        wishlist:false
      })
    })
  };
 
  return (
    <div className={styles['wishlist-page']}> {/* Use CSS module class */}
  
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {wishlistItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} style={{height:"100vh"}}   />
            <p className="legend"><span style={{fontSize:"larger"}}>{item.name}</span> <button className='btn btn-success' onClick={()=>navigate(`/getway-travels/specificPage/${item.id}`)}>View details</button>  <button className='btn btn-secondary ms-3' onClick={() => removeItemFromWishlist(item.id)}>Remove from wishlist</button></p>
          
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WishlistPage;
