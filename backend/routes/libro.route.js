let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Estudiante
let libroSchema = require("../models/libro");

// CREAR Estudiante
router.route("/create-libro").post((req, res, next) => {
  libroSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Estudiante
router.route("/").get((req, res, next) => {
  libroSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
   });
});

// Obtener un Estudiante
router.route("/edit-libro/:id").get((req, res, next) => {
  libroSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Estudiante
router.route("/update-libro/:id").put((req, res, next) => {
  libroSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Libro updated successfully !");
      }
    }
  );
});

// BORRAR Estudiante
router.route("/delete-libro/:id").delete((req, res, next) => {
  libroSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
