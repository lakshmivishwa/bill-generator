import { Router } from "express"
import express from 'express';

const router = express.Router();

import { signIn, register, billdetails } from './controllers/auth.controller.js';

// router.post("/", signIn);

router.post("/signin", signIn);

router.post("/register", register)

router.post("/billdetails", billdetails)

export default router;
