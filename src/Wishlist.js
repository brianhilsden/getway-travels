import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './WishlistPage.module.css';
import { useNavigate } from 'react-router-dom';
const WishlistPage = () => {
 const navigate = useNavigate ()
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, imageUrl: 'https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg', name: '4-day Adventure in Bali' },
    { id: 2, imageUrl: 'https://media.timeout.com/images/105240236/image.jpg', name: '6-day Gastronomic and Scuba Diving Adventure in Thailand' },
    { id: 3, imageUrl: 'https://images.squarespace-cdn.com/content/v1/57265e5745bf21105b61fddb/1704323010416-LLF3J3YUHPL648IOUGG6/089A6147.png?format=500w', name: 'Paris 5 Day trip' },
  ]);

 

 
  const removeItemFromWishlist = (id) => {
    const updatedWishlistItems = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlistItems);
  };

  return (
    <div className={styles['wishlist-page']}> {/* Use CSS module class */}
      <h1 className={styles['page-title']}>Wishlist Page</h1> {/* Use CSS module class */}
      
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {wishlistItems.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.name}  onClick={()=>navigate(`/getway-travels/specificPage/${item.id}`)} />
            <p className="legend">{item.name}</p>
            <button onClick={() => removeItemFromWishlist(item.id)}>Remove</button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WishlistPage;
