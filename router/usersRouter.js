const express = require("express");
const router = express.Router();

// login page
router.get("/users", usersController);

module.exports = router;
