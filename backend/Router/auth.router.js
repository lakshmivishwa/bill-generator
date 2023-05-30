import { Router } from "express"
import express from 'express';

const router = express.Router();
import generatePdf from './controllers/pdfControllerEjs.js';
// import generatePdf from './controllers/pdfController.js';
import { signIn, register, billdetails } from './controllers/auth.controller.js';
import { viewBillList } from "./controllers/viewBillsController.js";
// router.post("/", signIn);

router.post("/signin", signIn);

router.post("/register", register)

router.post("/billdetails", billdetails);

router.get("/generatePdf/:id", generatePdf)

router.get("/viewBillList", viewBillList)

export default router;
