const express = require("express");
const contacts = require("../controllers/contact.controller");
const router = express.Router();

router.route("/")
  .get(contacts.findAll)
  .post(contacts.create);

router.route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;
