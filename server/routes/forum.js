
import express from "express";
import { db } from "../../firebase/admin.js";
const router = express.Router();

router.get("/threads", async(_,res)=>{
  const snap = await db.collection("threads").get();
  res.json(snap.docs.map(d=>d.data()));
});
export default router;
