// STEP 1: import monogoose and the schema required
import mongoose from "mongoose";
import { MusicianSchema } from "../../data-models/musicianDataModel";

// STEP 2: Intatiate the schema
const Musician = mongoose.model("Musician", MusicianSchema);

// STEP3:create the CRUD routes in the controllers file
// POST @/api-musicans endpoint
export const addNewMusician = (req, res) => {
  // assign the req.body() method to a variable as a let as it is going to be changed
  let newMusician = new Musician(req.body);
  // then save the request body to the database
  newMusician.save((err, Musician) => {
    if (err) {
      res.send(err);
    }
    res.json(Musician);
  });
};
