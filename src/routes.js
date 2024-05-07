import App from "./App";
import SignUp from "./SignUp";
import Login from "./Login";
import SpecificPage from "./SpecificPage";


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
element:<Login/>}
]
export {routes}