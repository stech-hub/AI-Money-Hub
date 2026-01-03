
import express from "express";
import { db } from "../../firebase/admin.js";
const router = express.Router();

router.get("/", async(_,res)=>{
  const snap = await db.collection("courses").get();
  res.json(snap.docs.map(d=>d.data()));
});
export default router;
