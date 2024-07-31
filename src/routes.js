import App from "./App";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SpecificPage from "./components/SpecificPage";
import ContactUs from "./components/ContactUs";
import FeedBackForm from "./components/FeedbackForm";
import Wishlist from "./components/Wishlist";
import LandingPage from "./components/LandingPage";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/getway-travels",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/getway-travels",
        element: <LandingPage />,
      },
      { path: "/getway-travels/specificPage/:id", element: <SpecificPage /> },
      { path: "/getway-travels/signUp", element: <SignUp /> },
      { path: "/getway-travels/login", element: <Login /> },
      { path: "/getway-travels/contactUs", element: <ContactUs /> },
      { path: "/getway-travels/signUp", element: <SignUp /> },
      { path: "/getway-travels/feedbackForm", element: <FeedBackForm /> },
      { path: "/getway-travels/wishlist", element: <Wishlist /> },
    ],
  },
];
export { routes };
