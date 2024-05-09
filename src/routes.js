import App from "./App";
import SignUp from "./SignUp";
import Login from "./Login";
import SpecificPage from "./SpecificPage";
import ContactUs from "./ContactUs";
import FeedBackForm from "./FeedbackForm";
import Wishlist from "./Wishlist";
import LandingPage from "./LandingPage";

const routes = [
  { path: "/getway-travels",
   element: <App />,
    children:[
      {
        path:"/getway-travels",
        element:<LandingPage/>
      },
      { path: "/getway-travels/specificPage/:id", element: <SpecificPage /> },
      { path: "/getway-travels/signUp", element: <SignUp /> },
      { path: "/getway-travels/login", element: <Login /> },
      { path: "/getway-travels/contactUs", element: <ContactUs /> },
      { path: "/getway-travels/signUp", element: <SignUp /> },
      { path: "/getway-travels/feedbackForm", element: <FeedBackForm /> },
      { path: "/getway-travels/wishlist", element: <Wishlist /> },

    ]
  },

];
export { routes };
