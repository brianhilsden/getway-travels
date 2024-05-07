import { useNavigate } from "react-router-dom"

function LandingPage() {
    const navigate = useNavigate()
    return(
        <button onClick={()=>navigate("/specificPage")}>
                View specific
        </button>
    )
    
}
export default LandingPage