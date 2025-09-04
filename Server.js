import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // React se JSON data read karne ke liye

// MongoDB URI from environment variable
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI) // warnings hata diye
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// 🔹 MongoDB Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// 🔹 POST API to save contact form
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("Received message:", req.body);

    const existing = await Contact.findOne({ name, email, message });
    if (existing) {
      return res.status(400).json({ message: "This message already exists!" });
    }

    const newContact = new Contact({
      name,
      email: email.trim().toLowerCase(),
      message,
    });

    await newContact.save();
    res.json({ message: "Message saved successfully!" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ message: "Error saving message" });
  }
});

// // Update route
// app.put("/update/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = req.body; // frontend se updated values aayengi

//     const updatedUser = await Contact.findByIdAndUpdate(id, updatedData, {
//       new: true, // updated document return karega
//     });

//     if (!updatedUser) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     res.json({ success: true, message: "User updated successfully", user: updatedUser });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).json({ success: false, message: "Server error, try again" });
//   }
// });


// PUT /update-email
app.put("/update-email", async (req, res) => {
  try {
    const { email, name, message } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    const updatedUser = await Contact.findOneAndUpdate(
      { email: email.trim().toLowerCase() }, // filter by email
      { name, message },                     // new data
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});




app.post("/delete-email", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    const deletedUser = await Contact.findOneAndDelete({ email });

    if (deletedUser) {
      res.json({ success: true, message: "User deleted successfully" });
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});



// 🔹 Check email API
app.post("/check-email", async (req, res) => {
  try {
    const email = req.body.email.trim().toLowerCase();
    console.log("Checking email:", email);

    const contact = await Contact.findOne({ email });
    if (contact) {
      res.json({ registered: true, name: contact.name, message: contact.message });
    } else {
      res.json({ registered: false });
    }
  } catch (err) {
    console.error("Error checking email:", err);
    res.status(500).json({ registered: false });
  }
});

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
