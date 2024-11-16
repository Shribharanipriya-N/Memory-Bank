const ImageController = require('../controllers/ImageController');
const express = require('express');
const Router = express.Router();

Router.post("/images", ImageController.add);
Router.get("/images", ImageController.getimages);
Router.get("/images/:id", ImageController.getimage);
Router.delete("/images/:id", ImageController.deleteimage);
Router.put("/images/:id",ImageController.updateimage);
module.exports = Router;
