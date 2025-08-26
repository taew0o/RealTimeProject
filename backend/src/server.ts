import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js"

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/realtime";

if (!process.env.MONGO_URI) {
  console.warn("⚠️  MONGO_URI not set. Using default local URI.");
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("✅ MONGODB Connected.");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MONGODB Connection Failed.\n" + err?.message || err);
        process.exit(1); //db 연결 실패 시 프로세스 종료.
    })