/* ============================
   QUERY ROUTES
   Author: Harshit Kumar
   File: routes/query.js
============================ */

const express = require("express");
const router = express.Router();
const queryController = require("../controller/query");

/**
 * @route   POST /query
 * @desc    Handle portfolio contact form submission
 * @access  Public
 */
router.post(
  "/",
  // Basic request body guard
  (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body cannot be empty",
      });
    }
    next();
  },
  queryController.query
);

module.exports = router;
