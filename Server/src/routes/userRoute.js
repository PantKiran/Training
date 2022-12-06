const router = require("express").Router();
const { userRegister,getUser, deleteUser } = require("../controllers/userController");
router.post("/", userRegister);
router.get('/', getUser)
router.delete('/:id', deleteUser)
module.exports = router;
