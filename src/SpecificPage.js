import React, { useState } from 'react';

const SpecificPage = ({ image, description, plansofthepackage, price, onBookNow, onAddToWishlist }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleBookNow = () => {
    onBookNow();
  };

  const handleAddToWishlist = () => {
    setIsWishlist(!isWishlist);

    onAddToWishlist();
  };

  return (
    <div className="travel-package">
      <img src="https://i.pinimg.com/564x/ad/37/05/ad370511d29ac73fc9b0d9330deeb4d4.jpg" alt="Travel destination" />
      <p>{description}</p>
      <p>{plansofthepackage}</p>
      <p>Price: {price}</p>
      <button onClick={handleBookNow}>Book Now</button>
      <button onClick={handleAddToWishlist}>{isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</button>
    </div>
  );

};
export default SpecificPage