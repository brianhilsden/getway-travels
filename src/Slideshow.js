import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Stroll through Paris; a city with the elegance of its landmarks reflected in its simple syntax.",
    },
    {
      url: "https://images.unsplash.com/photo-1633345778967-3760204a4c57?q=80&w=1545&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Sandy toes, salty air, breathing freely without a care. Welcome to paradise!",
    },
    {
      url: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Navigate the enchanting waterways of Venice, where every turn unveils a new picturesque scene.",
    },
    {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Paddle your way to serenity and row into the sunset on an unforgettable journey.",
    },
    {
      url: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Whispering forests, serene landscapes, feel the essence of nature's tranquility.",
    },
    {
      url: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Discover the thrill of a safari adventure, capturing the untamed beauty of wildlife in their natural habitat.",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(0.2);

  useEffect(() => {
    setOpacity(1)
  
    const interval = setInterval(() => {
   
      setCurrentImageIndex(  currentImageIndex<images.length-1?currentImageIndex+1:0);
          
        setOpacity(1);
      
      setTimeout(()=>{
        setOpacity(0.8)
      },6800)
    }, 8000);
   

    return () => {
      clearInterval(interval);
      
    }; // Clean up on component unmount
  }, [currentImageIndex, images.length]);

  return (
    <div style={{background:"black"}}>
      <img
        src={images[currentImageIndex].url}
        alt={images[currentImageIndex].description}
        style={{
          filter: "brightness(70%)",
          height: "100vh",
          width: "100%",
          opacity: opacity,
          transition: "opacity 1.1s ease-in-out",
        }}
      />
      <h1 style={{ position: 'absolute', bottom: '30%', left: "13%", width: '50%', color: 'white', fontSize: '40px', opacity: opacity, transition: 'opacity 0.5s' }}>
        {images[currentImageIndex].description}
      </h1>
    </div>
  );
};

export default Slideshow;