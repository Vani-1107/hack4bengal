// Import the required modules
const express = require("express");
const router = express.Router();

// Import the Controllers

// Book Controllers Import
const {
  createBook,
  getAllBooks,
  getBookDetails,
  // getSellerCourses,
  deleteBook,
} = require("../controllers/Book");


// Importing Middlewares
const { auth, isSeller, isBuyer } = require("../middlewares/auth");

// ********************************************************************************************************
//                                      Book routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createBook", auth, isSeller, createBook);
// Get all Registered Courses
router.get("/getAllBooks", getAllBooks);
// Get Details for a Specific Courses
router.post("/getBookDetails", getBookDetails);
// Get all Books Under a Specific Seller
// router.get("/getSellerBooks", auth, isSeller, getSellerBooks)
// Delete a Course
router.delete("/deleteBook", deleteBook);

// router.get("/showAllGenre", showAllCategories)
// router.post("/getGenrePageDetails", genrePageDetails)

module.exports = router;
