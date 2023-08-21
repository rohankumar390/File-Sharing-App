import express from "express";
import { uploadImage } from "../controller/imag-controller.js";

const router = express.Router();

router.post("/upload", middleware, uploadImage);

export default router;
