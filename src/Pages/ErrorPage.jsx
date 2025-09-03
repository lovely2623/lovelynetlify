import { NavLink, useNavigate, useRouteError } from "react-router-dom"
import err from "../assets/err.png";

export const ErrorPage =()=>{


    // const href = ()=>{
        
    //        window.location.href ="/";
        
    // }

    const navigate = useNavigate();
const  handlenavigatefunction =()=>{
    navigate(-1)
}



const error = useRouteError();
if(error.status ===404 ){
    return(
        <div   style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" , height: "100vh" }} >
            <img src= {err} alt="error404d" style={{width: "400px", }}></img>

            <div>
                {/* <button onClick={href}  style={{  backgroundColor: "blue", color: "black" , borderRadius: "5px", }}> Go Back to Home</button> */}

                {/* <NavLink to="/" > <h3 style={{backgroundColor: "red ",borderRadius: "9px"}}>Going to Home</h3></NavLink> */}


          <button onClick={handlenavigatefunction}> Go Back Simon </button>
            </div>
        </div>
        
    )
}
console.log(error);

    return  <h1>Error hu m </h1>
}