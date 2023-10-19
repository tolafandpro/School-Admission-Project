const router = require("express").Router();
const { getAllProspectus, createProspesctus, deleteProspesctus } = require("../controllers/prospectusController");


// Get all prospectus request
router.get("/all-prospectus", getAllProspectus);

// Create a Prospectus request
router.post("/request", createProspesctus)

// Delete a Prospectus 
router.delete("/:id", deleteProspesctus)

module.exports = router;