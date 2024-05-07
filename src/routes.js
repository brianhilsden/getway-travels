import App from "./App";
import SignUp from "./SignUp";
import Login from "./Login";
import SpecificPage from "./SpecificPage";
import ContactUs from "./ContactUs";
import FeedBackForm from "./FeedbackForm";
import Wishlist from "./Wishlist";


const routes = [
    {path:"/",
    element:<App/>
    },
    {path:"/specificPage",
    element:<SpecificPage/>
},
{path:"/signUp",
    element:<SignUp/>
},
{path:"/login",
element:<Login/>},
{path:"/contactUs",
element:<ContactUs/>},
{path:"/signUp",
element:<SignUp/>},
{path:"/feedbackForm",
element:<FeedBackForm/>},
{path:"/wishlist",
element:<Wishlist/>}
]
export {routes}