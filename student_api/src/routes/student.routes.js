// const express = require("express");
const express = require('express');
const studentController = require("../controllers/student.controllers")
const router = express.Router();

router.get("/",  studentController.getAllStudents);
router.get("/:id", studentController.getStudentsById);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;