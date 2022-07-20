const router = require("express").Router();

router.use("/coasters", require('./coaster.routes'))

router.use("/auth", require('./auth.routes'))

router.use("/upload", require('./upload.routes'))

module.exports = router