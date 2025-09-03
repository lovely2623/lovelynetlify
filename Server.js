import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // React se JSON data read karne ke liye

const MONGO_URI = "mongodb+srv://mtthakur786mt:Mohit12345@@cluster0.7bejf5h.mongodb.net/contactDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});




// // 🔹 MongoDB connect
// mongoose.connect("mongodb://127.0.0.1:27017/contactDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));





// 🔹 MongoDB Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);






// 🔹 POST API (React form data receive karne ke liye)


app.post("/contact", async (req, res) => {

  try {
    const { name, email, message } = req.body;

       console.log("Received message:", req.body); // Add this to debug

// Check if the same data already exists
    const existing = await Contact.findOne({ name, email, message });

    if (existing) {
      return res.status(400).json({ message: "This message already exists!" });
    }

const newContact = new Contact({
  name: name,
  email: email.trim().toLowerCase(),
  message: message,
});    await newContact.save();
    res.json({ message: "Message saved successfully!" });
  } 
  
  catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error saving message" });
  }

});



// Schema
// const UserSchema = new mongoose.Schema({
//   email: String,
// });

// const User = mongoose.model("User", UserSchema);


// API route
app.post("/check-email", async (req, res) => {
  try {
    const email = req.body.email.trim().toLowerCase(); // trim + lowercase
    console.log("Checking email:", email);

    const contact = await Contact.findOne({ email }); 
    console.log("Found users:", contact);

    if (contact) {
      res.json({ registered: true,  name: contact.name , message: contact.message });
    } else {
      res.json({ registered: false });
    }
  } catch (err) {
    console.error("Error checking email:", err);
    res.status(500).json({ registered: false });
  }
});


// 🔹 Server start
// const PORT = 5000;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));










