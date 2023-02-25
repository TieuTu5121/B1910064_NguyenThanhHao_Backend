const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
<<<<<<< HEAD
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);
=======
    .delete(contacts.deleteAll)
router.route("/favorite")
    .get(contacts.findAllFavorite)

router.route("/id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete)
>>>>>>> 577f307cf374e0ef3c76f2f7c6666887b8c4a972

module.exports = router;