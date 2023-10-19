const router = require("express").Router();
const { getAllUsers, getSingleUser, updateUsers, deleteUsers } = require("../controllers/userController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddlewares");



//Get all Users
router.get("/all-users", getAllUsers);

//Get Single User
router.get("/:id", authMiddleware, isAdmin, getSingleUser);

//Update a User
router.put("/edit-user/:id", authMiddleware, updateUsers);

//User status User
// router.get("/status-users", userStatus);

//Delete a User
router.delete("/:id", deleteUsers);

module.exports = router;