const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user: String,
  words: [
    {
      content: { type: String, required: true, max: 100 },
      created: { type: Number, required: true }
    }
  ]
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
