import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/specificPage")}>View specific</button>
      <button onClick={() => navigate("/signUp")}>SignUp Page</button>
      <button onClick={() => navigate("/login")}>Login page</button>
      <button onClick={() => navigate("/contactUs")}>Contact Us page</button>
      <button onClick={() => navigate("/feedbackForm")}>FeedBack form</button>
      <button onClick={() => navigate("/wishlist")}>Wishlist</button>
    </div>
  );
}
export default LandingPage;
