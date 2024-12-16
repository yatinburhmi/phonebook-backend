import express from "express";
import * as contactController from "../controllers/contactController";

const router = express.Router();

router.get("/", contactController.getContact);
router.get("/", contactController.getContactById);
router.post("/", (req, res, next) => {
    console.log("POST /api/v1/contact hit");
    next();
  }, contactController.addContact);
router.patch("/", contactController.updateContact);
router.delete("/", contactController.deleteContact);

export {router};