
import express from "express";
import { db } from "../../firebase/admin.js";
const router = express.Router();

router.get("/payments", async(_,res)=>{
  const snap = await db.collection("payments").where("approved","==",false).get();
  res.json(snap.docs.map(d=>({id:d.id,...d.data()})));
});

router.post("/approve", async(req,res)=>{
  const { userId, days } = req.body;
  const expires = new Date();
  expires.setDate(expires.getDate()+days);
  await db.collection("subscriptions").doc(userId).set({active:true,expiresAt:expires});
  res.json({success:true});
});
export default router;
