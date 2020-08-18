/*jshint esversion: 6 */
const mongoose = require("mongoose");

const MusicBandSchema = new mongoose.Schema({
  bandName: {
    type: String,
    required: true,
  },
  musicGenre: {
    type: String,
    required: false,
  },
  decade: {
    type: Number,
    enum: [1, 2, 3, 4],
    required: false,
  },
  isStillLiving: {
    type: Boolean,
    default: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

module.exports = mongoose.model("MusicBandModel", MusicBandSchema);
// OR module.exports = MusicBand = mongoose.model('MusicBand', MusicBandSchema);
