import { Router } from "express"
import express from 'express';

const router = express.Router();
import generatePdf from './controllers/pdf.controller.js';
import { signIn, register, billdetails } from './controllers/auth.controller.js';
import { viewBills } from "./controllers/viewBillsController.js";
// router.post("/", signIn);

router.post("/signin", signIn);

router.post("/register", register)

router.post("/billdetails", billdetails);

router.get("/generatePdf/:id", generatePdf)

router.get("/viewBills", viewBills)

export default router;
