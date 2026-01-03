
import express from "express";
import OpenAI from "openai";
import { db } from "../../firebase/admin.js";
const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/workspace", async(req,res)=>{
  const { userId, prompt } = req.body;
  const sub = await db.collection("subscriptions").doc(userId).get();
  if (!sub.exists || !sub.data().active) return res.status(403).json({error:"Subscription expired"});
  const r = await openai.chat.completions.create({
    model:"gpt-4o-mini",
    messages:[{role:"user",content:prompt}]
  });
  res.json({ code:r.choices[0].message.content });
});
export default router;
