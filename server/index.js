
import express from "express";
import cors from "cors";
import ai from "./routes/ai.js";
import admin from "./routes/admin.js";
import courses from "./routes/courses.js";
import forum from "./routes/forum.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ai", ai);
app.use("/api/admin", admin);
app.use("/api/courses", courses);
app.use("/api/forum", forum);

app.listen(5000,()=>console.log("API running"));
