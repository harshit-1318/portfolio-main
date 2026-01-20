/* ============================
   QUERY ROUTES
   Author: Harshit Kumar
   File: routes/queryRoutes.js
============================ */

const express = require("express");
const router = express.Router();
const queryController = require("../controller/query");

// ============================
// POST /query
// ============================
router.post(
  "/",
  // Request body guard (safety)
  (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body cannot be empty.",
      });
    }
    next();
  },
  // Controller
  queryController.query
);

module.exports = router;
