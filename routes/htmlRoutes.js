var path = require("path");
const router = require("express").Router();

//routes to index
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../assets/index.html"));
});

// route to all notes
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../assets/notes.html"));
});


module.exports = router;