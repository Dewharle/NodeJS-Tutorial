const Contact = require("../models/contact");

let homeController = (req, res) => {
  res.render("home");
};

let profileController = (req, res) => {
  res.json({
    name: "W4",
    job: "Programmer",
  });
};

let contactController = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new Contact(req.body);
    const newContact = await contact.save();

    res.send(newContact);
  } catch (error) {
    res.send(error.message);
  }
};

let getMessages = async (req, res) => {
  Contact.find({}, (err, docs) => {
    if (err) console.log(err);

    res.send(docs);
  });
};

module.exports = {
  profileController,
  contactController,
  homeController,
  getMessages,
};
