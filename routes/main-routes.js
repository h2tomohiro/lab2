const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

let data = fs.readFileSync("notes.json");
let notes = JSON.parse(data);

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/read", (req, res, next) => {
  res.render("read", { notes: notes });
});

router.get("/leave", (req, res, next) => {
  res.render("leave");
});

router.post("/add-note", (req, res, next) => {
  notes.push({
    id: Math.random(),
    note: req.body.note,
  });

  fs.writeFile(
    path.join(__dirname, "..", "notes.json"),
    JSON.stringify(notes, null, 2),
    () => {
      res.status(302).redirect("/");
    }
  );
});

router.get("*", function (req, res) {
  res.status(404).render("404");
});

module.exports = router;
