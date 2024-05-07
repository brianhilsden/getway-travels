import App from "./App";
import SpecificPage from "./SpecificPage";


const routes = [
    {path:"/",
    element:<App/>
    },
    {path:"/specificPage",
    element:<SpecificPage/>
}
]
export {routes}