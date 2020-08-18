import mongoose from "mongoose";
import { MusicianSchema } from "../../data-models/musicianDataModel";

const Player = mongoose.model("Player", MusicianSchema);

// POST @/musicans
export const addNewMusician = (req, res) => {
  let newMusician = new Musician(req.body);

  newMusician.save((err, Musician) => {
    if (err) {
      res.send(err);
    }
    res.json(Musician);
  });
};
