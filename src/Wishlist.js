
import React, { useState } from 'react';

function WishlistForm({ destinations }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (destination) => {
    if (!wishlist.some(item => item.name === destination.name)) {
      setWishlist([...wishlist, destination]);
    }
  };

  const removeFromWishlist = (name) => {
    const updatedWishlist = wishlist.filter(item => item.name !== name);
    setWishlist(updatedWishlist);
  };

  return (
    <div>
      <h1>Travel Wishlist</h1>
      <div className="destinations">
        {destinations.map(destination => (
          <div key={destination.name} className="destination">
            <img src={destination.image} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <p>Price: ${destination.price}</p>
            <button onClick={() => addToWishlist(destination)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
      <div className="wishlist">
        <h2>My Wishlist</h2>
        {wishlist.length === 0 ? <p>Your wishlist is empty</p> : null}
        <ul>
          {wishlist.map(item => (
            <li key={item.name}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromWishlist(item.name)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WishlistForm;

        
    