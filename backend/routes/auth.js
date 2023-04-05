const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'ThisIsTheJWTSECRET'; //this is to create the web token

//ROUTE-1 Create a user using POST "/api/auth/createuser"  --No login
router.post('/createuser', [
  body('name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
  let success = false;

  // If there are no errors, return Bad request and the errors 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  // Check whether the user/email exists already 
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "Email already exists" })
    }

    //Generating hash of the password using bcrypt to secure our password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    //Create a new user --No log in required
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET); //here we are creating a token for our users
    success = true;
    res.json( {success, authtoken} )
    //res.json(user)

    //Show error if something internal error occurs
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
})




//ROUTE-2 Authenticate a user using POST "/api/auth/login" ---No login required 
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be empty').exists(),
], async (req, res) => {
  let success = false;

  // If there are no errors, return Bad request and the errors 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please try to login with valid credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) {
      return res.status(400).json({ error: "Please try to login with valid credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET); //here we are creating a token for our users
    success = true;
    res.json({success, authtoken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
})




//ROUTE 3- Get logged in user details using POST "/api/auth/getuser" --- Login required 
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userID = req.user.id;
    const user = await User.findById(userID).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
})
module.exports = router