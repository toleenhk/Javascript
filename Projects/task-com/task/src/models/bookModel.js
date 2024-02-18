import mongoose from "mongoose";

const bookschema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a Title"],
    unique: true,
  },
  genre: {
    type: String,
    required: [true, "Please provide a book genre"],
    unique: true,
  },
  pagecount: {
    type: String,
    required: [true, "Please provide a page count"],
  },

  readingProgress: {
    type: Number,
    default: 0, // Default progress is 0%
  },
  review: {
    type: String,
  },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const Book = mongoose.models.books || mongoose.model("books", bookschema);

export default Book;
