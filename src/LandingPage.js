import { useNavigate } from "react-router-dom"

function LandingPage() {
    const navigate = useNavigate()
    return(
        <>
        
        <button onClick={()=>navigate("/specificPage")}>
                View specific
        </button>
        <button onClick={()=>navigate("/signUp")}>
            SignUp Page
        </button>
        <button onClick={()=>navigate("/login")}>
            Login page
        </button>
        </>
    )
    
}
export default LandingPage