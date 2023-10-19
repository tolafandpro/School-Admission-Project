const router = require("express").Router();
const {getAllReg, getSingleReg, regAdmission} = require("../controllers/admissionController");

// Get all registerd admissions
router.get("/", getAllReg); 

// Get a particular admission id
router.get("/:id", getSingleReg);

// Apply for a new admission
router.post("/register", regAdmission);



module.exports = router;