const { adoptRegister, getAllAdopts } = require("../middleware/adoptController");

const router = require("express").Router();
router.post("/register",adoptRegister)
router.get('/allusers',getAllAdopts)

module.exports = router