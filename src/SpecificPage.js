import React, { useState } from 'react';
const SpecificPage = ({ image, description, Itinerary, price, onBookNow, onAddToWishlist }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleBookNow = () => {
    onBookNow();
  };

  const handleAddToWishlist = () => {
    setIsWishlist(!isWishlist);

    onAddToWishlist();
  };
  return (
    <div className="display:flex flex-column">
       <img src="https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%" height="50vh" className='ms-2' alt="Travel destination" style={{ top: 0, left: 0, order: -1, width: '100%', height: '50vh' }} />
              <p > DESCRIPTION :Home to The Big Five, Mighty Masai Warriors And The Eight Wonder Of The World. This destination is a must see for every traveler. Prepare to be in awe by the stunning views of the African plains, come face to face with the king of the jungle and learn more about the Maasai Mara. Part of the fun of going on safari is planning your safari. We have been there and we know how it feels. As avid travelers we can imagine you have a ton of questions. Very few places on earth are as unspoilt, adventurous and authentic as the Maasai Mara eco-system. Allow us to plan the best 3-Day safari adventure just for you.

</p>
              <p>Day 1: Departure From Nairobi To Maasai Mara
The start of the safari will be from the Bonfire Adventures Town Office (Yala Towers) at 0630hrs. The journey begins with a meet and greet which shall be followed by a short briefing by our safari driver. Get the chance to soak in the beautiful views as we descend to the Great Rift Valley all the way to the Maasai Mara. The drive It will take approximately 5.5hours. There will be a quick stop over at the Great Rift Valley viewpoint, to enjoy the amazing views of the largest Valley in the world, said to be visible from outer space. Arrival at Maasai Mara will be around lunch hour giving you the chance to check into your camp or lodge, then enjoy a delicious meal. At 0330hrs, it's time to head out on your afternoon game drive. Get the chance to drive to the waterholes to see what animals have come down to enjoy a drink. Expect to find the large herbivores elephants, rhinos and buffalos cooling down by immersing themselves in water and having a good old mud bath. Hyenas and wild dogs still move around during the day and as the heat of the day continues to set in expect to spot beautiful lions in a pride resting under a shady spot, or cheetahs as well as leopards. In the evening you will drive back to your camp or lodge for dinner and an overnight stay.

Day 2: ENJOY A FULL DAY IN MAASAI MARA
This is one of the best days for safari lovers. Right after breakfast, sit back, relax and discover the wild beauty of the Kenya's Maasai Mara. Boasting one of the finest collections of wild animals, our expert tour guides are simply the best when it comes to uncovering the wonders of this safari destination. Get to come face to face with the Big Five, spot a great species of mammals, birds and some very spectacular looking creatures that you may not have heard of. For lunch, you will get to enjoy a deliciously packed picnic under the shade of an Acacia tree, or overlooking the snorting hippos which wallow in the Mara River. Return to your camp or lodge in the evening, relax, enjoy the amenities and dinner.

Day 3: DEPARTURE FROM MAASAI MARA, GAME DRIVE AND RETURN TO NAIROBI
The last and final day of your Masai Mara Safari begins at the break of dawn with breakfast. If you would like, you can embark on another game drive in the early morning. Wildlife abundance in the reserve is high at this early hours of the day. You can take advantage over this game drive to look out for wild animals that you may not have spotted during your last two days of your safari. After the departure from your camp or lodge, we will depart from Maasai Mara driving via Narok Town (Maasai Market) with a short stop-over for any possible shopping. Continue to Nairobi arriving from around 02:00pm. Drop off is at the convenient point of your choice.</p>
              <p>Price:ksh20,000</p>
              <button onClick={handleBookNow}>Book Now</button>
              <button onClick={handleAddToWishlist}>{isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</button>
    </div>
   );
 

};
export default SpecificPage