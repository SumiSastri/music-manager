/*jshint esversion: 6 */

// STEP 1: import libraries
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// STEP2: import the validated data schema with modules syntax
const MusicianDataModel = require("../../data-models/musicianDataModel");
// import { MusicianSchema } from "../../data-models/musicianDataModel";
console.log(MusicianDataModel);
// STEP3: Add data with POST route
router.post("/api-musicians", (req, res) => {
  // assign request body to a variable for the payload
  let {
    firstName,
    lastName,
    email,
    phone,
    iscoach,
    team,
    speed,
    strength,
    endurance,
    ability,
    techniques,
    tactical,
    createdDate,
  } = req.body;

  let newMusicianPayload = new MusicianDataModel({
    firstName,
    lastName,
    email,
    phone,
    iscoach,
    team,
    speed,
    strength,
    endurance,
    ability,
    techniques,
    tactical,
    createdDate,
  });
  console.log("firstName:", req.body);

  newMusicianPayload
    .save()
    .then((savedMusicianInfo) => res.status(200).json(savedMusicanInfo))
    .catch((err) => res.status(422).json({ message: err }));
});

module.exports = router;
