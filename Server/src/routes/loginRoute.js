const router = require("express").Router();
const { userLogin } = require("../controllers/userController");
router.post("/", userLogin);
module.exports = router;
