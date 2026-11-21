const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ── Connect to MongoDB ──
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB not connected", err);
  });

// ── Routes ──
const userRouter = require("./Routers/UserRouters");   // ✅ Fixed: was required() → require()
app.use("/api/users", userRouter);

// ── Start Server ──
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on port ${process.env.PORT}`);
});
