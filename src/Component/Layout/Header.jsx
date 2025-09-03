import { NavLink } from "react-router-dom";
 import { useEffect ,useState } from "react";
export const Header=()=>{


    const getnavlinksactive = ({isActive})=>{
        return{
            color : isActive ? "blue" : "black",
    };
    };


  const [time, setTime] = useState(new Date());


  const  today = new Date();
  const aaj = today.getDate();
const month= today.getMonth();
const year = today.getFullYear();
const day = today.getDay();

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = week[day]


  const finaldate= `${aaj}/${month}/${year}`



  useEffect(() => {
    // Har 1 second me update hoga
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup jab component unmount hoga
    return () => clearInterval(timer);
  }, []);


    return (
    
    <div className="page">
      <nav className="navbar">
        {/* Left side - Brand Name */}
        <div className="logo">Lovely Mohit Thakur<br/></div>
        

        {/* Right side - Navigation Links */}
        <ul className="nav-links">
          <li><NavLink to="/" style={getnavlinksactive}>Home</NavLink></li>
          <li><NavLink to="/about" style={getnavlinksactive}>About</NavLink></li>
          <li><NavLink to="/movies" style={getnavlinksactive}>Movies</NavLink></li>
          <li><NavLink to="/contact" style={getnavlinksactive}>Contact</NavLink></li>
         <li> {time.toLocaleTimeString()} <br/>
                {finaldate}<br/>
                {weekday}
         </li>

        </ul>
      </nav>
    </div>
    
    )
};