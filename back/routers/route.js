const express = require("express");
const Profile = require("../models/profileSchema");

const router = express.Router();

//all-profiles
router.get("/all", (req, res) => {
  Profile.find()
    .sort({ views: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//single-profile
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Profile.findByIdAndUpdate(id, { $inc: { views: 1 } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//create-new-profile
router.post("/", (req, res) => {
  console.log(req.body);
  const course = new Profile(req.body);

  course
    .save()
    .then((result) => {
      res.send(result);
      console.log("New profile created");
    })
    .catch((err) => {
      console.log(err);
    });
});

//update-profile
router.put("/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Profile.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: `Could not Update profile with id = ${id}!`,
        });
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//delete-profile
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Profile.findByIdAndDelete(id)
    .then((result) => {
      res.send({
        message: "profile was deleted successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
