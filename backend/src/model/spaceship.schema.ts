import * as mongoose from 'mongoose';

export const SpaceshipModel = new mongoose.Schema({
  name: {
    type: String
  },
  speed: {
    type: Number
  }
});