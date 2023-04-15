const express = require("express");
const {
    loginController,
    registerController,
    applyDoctorController,
} =require("../controllers/userCtrl");
//router onject 
const router = express.Router();
//routes
//LOGIN||POST
router.post("/login",loginController);
// REGISTER||POST
router.post("/register", registerController);
//Auth || POST
router.post('/getUserData', authMiddleware ,  authController);
module.exports =router;
//Apply Doctor || POST
router.post('/apply-doctor', authMiddleware ,  applyDoctorController);
module.exports =router;



