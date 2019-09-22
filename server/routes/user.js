const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

// a simple test url to check that all of our files are communicating correctly.
router.get("/:user", userController.all);
router.post("/:user", userController.add);
router.delete("/:user", userController.delete);

module.exports = router;
