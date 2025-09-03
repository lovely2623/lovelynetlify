
import { NavLink } from "react-router-dom";
import p from "../assets/p.jpg";

export const Home =()=>{
  const sectionStyle = {
    position: "relative",
    width: "100%",
    minHeight: "80vh",
    backgroundImage: `url(${p})`, // replace with your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px",
    color: "white",
    zIndex: 1,
  };

  const spanStyle = {
    fontSize: "18px",
    letterSpacing: "1px",
    marginBottom: "10px",
    display: "inline-block",
    color: "#f1f1f1",
  };

  const h1Style = {
    fontSize: "48px",
    lineHeight: "1.2",
    marginBottom: "20px",
    fontWeight: "bold",
  };

  const pStyle = {
    fontSize: "18px",
    maxWidth: "600px",
    marginBottom: "30px",
    color: "#f1f1f1",
  };

  const buttonStyle = {
    padding: "12px 40px",
    textDecoration: "none",
    background: "linear-gradient(to right, #ff1e56, #ff4b2b)",
    border: "none",
    borderRadius: "30px",
    color: "white",
    width: "300px",
    fontSize: "46px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(255,30,86,0.4)",
    transition: "transform 0.2s",
  };

  const buttonHover = (e) => {
    e.target.style.transform = "scale(1.05)";
  };

  const buttonLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  const waveStyle = {
  
  };

  return (
    <section style={sectionStyle}>
      <span style={spanStyle}>Explore the latest in movie industries</span>
      <h1 style={h1Style}>Unlimited Movie, TVs Shows & <br/> More</h1>
      <p style={pStyle}>
        Discover the top best movies and dramas with a catchy subtitle like
        Your Ultimate Guide to Must Watch Content
      </p>

      <NavLink to= "/movies"
      
        style={buttonStyle}
        onMouseEnter={buttonHover}
        onMouseLeave={buttonLeave}
      >
        Explore Now
      

      </NavLink>

      {/* Wave SVG */}
 
    </section>
  );
}