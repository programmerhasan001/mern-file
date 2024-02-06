const { Router } = require("express");
const { upload } = require("../controllers/studentController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = Router();

router.get("/get-student", getStudent);
router.post("/create-student", authMiddleware, createStudent);
router.put("/update-student", updateStudent);
router.delete("/delete-student", deleteStudent);
router.post("/upload-photo", upload.single("file"), uploadPhoto);

module.exports = router;
