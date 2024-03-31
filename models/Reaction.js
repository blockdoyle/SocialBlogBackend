const mongoose = require("mongoose");
const moment = require("moment");

// Schema design for the Reaction model
const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: getTimestamp(Date.now()),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// getter function to get the converted timestamp.
const getTimestamp = (time) => {
  return moment(time).format("MMM Do, YYYY [at] hh:mm a");
};
