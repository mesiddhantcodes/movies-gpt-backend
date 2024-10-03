const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  userName: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
