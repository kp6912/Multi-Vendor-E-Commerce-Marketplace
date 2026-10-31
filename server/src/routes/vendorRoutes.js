const express = require("express")
const {applyAsVendor} = require("../controllers/vendorController")
const authenticate = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/apply",authenticate, applyAsVendor)

module.exports = router;



