
import p from "../assets/p.jpg";
import { useState , useEffect } from "react";


 
export const About =()=>{


  const [email, setEmail] = useState("");
   const [userName, setUserName] = useState(""); // new state for name
   const [userMessage, setUserMessage] = useState(""); // new state for name



  useEffect(() => {
    fetch("https://lovelynetlify-9.onrender.com/api/hello") // backend URL
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log("Error:", err));
  }, []);




const handleUpdate = async (id, updatedData) => {
  try {
    const response = await fetch(`https://lovelynetlify-9.onrender.com/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const data = await response.json();

    if (data.success) {
      alert("User updated successfully");
      // state me bhi update karo
      setUsers(users.map((user) => (user._id === id ? data.user : user)));
    } else {
      alert("Failed to update: " + data.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server error, try again");
  }
};


const handleDelete = async () => {
  if (!email) {
    alert("Please enter your email to delete");
    return;
  }

  try {
    const response = await fetch("https://lovelynetlify-9.onrender.com/delete-email", {
      method: "POST",
      // method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.trim().toLowerCase() }),
    });

    const data = await response.json();
    console.log("Delete response:", data);

    if (data.success) {
      alert("✅ Data deleted successfully");
      setUserName("");
      setUserMessage("");
      setEmail("");
    } else {
      alert("❌ Could not delete. " + (data.message || ""));
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server error, please try again later");
  }
};



const handleCheck = async () => {


 if (!email) {
      alert("Please enter your email");
      return;
    }

 try {

const response = await fetch("https://lovelynetlify-9.onrender.com/check-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email: email.trim().toLowerCase() }),
});

const data = await response.json();
console.log("Data from server:", data); // check karo yaha kya aa raha

 if (data.registered) {
        alert("✅ Yes, you are registered");
           setUserName(data.name);
           setUserMessage(data.message || "No message found");
      } 
      else {
        alert("❌ Sorry, you are not registered");
           setUserName("");
            setUserMessage("");
      }



        } catch (error) {
      console.error("Error:", error);
      alert("Server error, please try again later");
    }
  };





  const sectionStyle = {
    position: "relative",
    width: "100%",
    minHeight: "80vh",
    backgroundImage: `url(${p})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "50px",
    textAlign: "left",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)", // dark overlay for readability
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "700px",
  };

  const h1Style = {
    fontSize: "48px",
    marginBottom: "20px",
  };

  const pStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "20px",
  };
const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    marginBottom: "15px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  };
  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={h1Style}>About Me</h1>
        <p style={pStyle}>
          Hello! I am Mohit Thakur, a passionate web developer and tech enthusiast. I love exploring the latest trends in web technologies and building interactive, user-friendly applications.
        </p>
        <p style={pStyle}>
          With a background in React, Node.js, and modern web development, I aim to create projects that not only look great but also provide real value to users. My focus is on clean code, responsive design, and seamless user experience.
        </p>
        <p style={pStyle}>
          Outside of coding, I enjoy learning new skills, experimenting with creative projects, and keeping up-to-date with the latest in the tech world.
        </p>




        {/* New input and button */}
        <input
          type="email"
          placeholder="Enter your email id"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h1> Welcome : {userName ? userName : "Guest"}</h1>
        <h2> You said to me  : {userMessage ? userMessage : "Guest"}</h2>


        <button style={buttonStyle}  onClick={handleCheck}>
          Check if you are registered in our database
        </button>
        <br/>
        <br/>
        <button style={buttonStyle} onClick={handleDelete}>
          Delete
        </button>
         <br/>
        <br/>
         <button style={buttonStyle} onClick={handleUpdate}>
          Delete
        </button>
      </div>
    </section>
  );
}



