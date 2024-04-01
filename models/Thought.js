const mongoose = require("mongoose");
const moment = require("moment");

// Schema design for the Thought model
const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reaction",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      // getters: true,
    },
  }
);

// virtual getter function to get the converted timestamp.
thoughtSchema.virtual("formattedCreatedAt").get(function () {
  return moment(this.createdAt).format("MMM Do, YYYY [at] hh:mm a");
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
