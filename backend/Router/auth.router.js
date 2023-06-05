import { Router } from "express"
import express from 'express';

const router = express.Router();
// import {restaurantBillPdf} from './controllers/restaurantBillPdfController';
// import { billPdf } from './controllers/billPdfController';
import { billdetails } from './controllers/billDetailsController.js';
import { signIn, register, } from './controllers/auth.controller.js';
import { viewBillList } from "./controllers/viewBillsController.js";
import generatePdf from './controllers/pdfControllerEjs.js';

router.post("/signin", signIn);

router.post("/register", register)

router.post("/billdetails", billdetails);

// router.get("/generatePdf/:id", billPdf);

// router.get("/generatePdf/:id", billPdf)
router.get("/viewBillList", viewBillList);
router.get("/generatePdf/:id", generatePdf)
export default router;
