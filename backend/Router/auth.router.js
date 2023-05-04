import { Router } from "express"
import express from 'express';

const router = express.Router();

import { signIn, register, billDetails } from './controllers/auth.controller.js';

// router.post("/", signIn);

router.post("/login", signIn);

router.post("/register", register)

router.post("/billDetails", billDetails)

export default router;
