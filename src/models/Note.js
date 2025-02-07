import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",  // Reference to the User model
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],  // Array of strings
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
    archive: {
      type: Boolean,
      default: false,  // Notes are not archived by default
    },
  },
  { timestamps: true }  // Automatically adds createdAt and updatedAt
);

export default mongoose.models.Note || mongoose.model("Note", noteSchema);
