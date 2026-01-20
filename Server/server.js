// ======================
// LOAD ENV
// ======================
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ======================
// IMPORTS
// ======================
const express = require("express");
const cors = require("cors");
const compression = require("compression");

const connectDB = require("./Config/mongodb");
const queryRoutes = require("./routes/queryRoutes");

// ======================
// INIT APP
// ======================
const app = express();
const PORT = process.env.PORT || 3000;

// ======================
// CONNECT DATABASE
// ======================
connectDB();

// ======================
// CORS CONFIG (🔥 ONLY ONCE)
// ======================
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://192.168.198.1:5173", // LAN testing
  process.env.FRONTEND_URL,   // Vercel (future)
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow server-to-server / Postman
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS: Origin not allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ======================
// MIDDLEWARES
// ======================
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// ======================
// ROUTES
// ======================
app.use("/query", queryRoutes);

// ======================
// HEALTH CHECK
// ======================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Portfolio backend is running",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

// ======================
// 404 HANDLER
// ======================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ======================
// GLOBAL ERROR HANDLER
// ======================
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ======================
// START SERVER
// ======================
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
