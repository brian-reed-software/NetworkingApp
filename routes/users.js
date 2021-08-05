const router = require("express").Router()
router.get("/" , (req,res)=>
    {res.send("hey it's user router")}
)
module.exports = router