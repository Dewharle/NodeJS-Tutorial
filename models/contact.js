const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
   
  },
  message: {
    type: String,
   
  },
});

const Contact = new mongoose.model("contact", contactSchema);

module.exports = Contact;
