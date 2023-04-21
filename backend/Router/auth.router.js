import { Router } from "express"
import express from 'express';

const router = express.Router();

import { signIn, register } from './controllers/auth.controller.js';


router.post("/login", signIn);

router.post("/register", register)


export default router;
