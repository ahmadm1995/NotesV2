import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    lastEdited: {
      type: Date,
      default: Date.now,
    },
    body: {
      type: String,
      required: true,
    },
    archived: {  // Make sure this is the only archive-related field
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


export default mongoose.models.Note || mongoose.model("Note", noteSchema);
