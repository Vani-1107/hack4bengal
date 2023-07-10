// Import the required modules
const express = require("express");
const router = express.Router();

// // Import the required controllers and middleware functions
const {
  login,
  Signup,
 
  logout
  
 
} = require("../controllers/auth");
// // const {
// //   resetPasswordToken,
// //   resetPassword,
// // } = require("../controllers/ResetPassword");

// const { auth } = require("../middlewares/auth");


router.post("/login", login);

// // Route for user signup
router.post("/signup", Signup);
router.get("/logout",logout)
// // 


// // Route for Changing the password
// router.post("/changepassword", auth, changePassword);


// // Route for generating a reset password token
// router.post("/reset-password-token", resetPasswordToken);

// // Route for resetting user's password after verification
// router.post("/reset-password", resetPassword);

// // Export the router for use in the main application
module.exports = router;
