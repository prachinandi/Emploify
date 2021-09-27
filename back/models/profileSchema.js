const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
   age: {
      type: Number,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
