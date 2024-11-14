const { v4 } = require('uuid');
const ImageModel = require('../models/ImageModel');

const add = async (req, res) => {
    try {
        const data = req.body;
        const newimage = new ImageModel({
            title: data.title,
            description: data.description,
            url: data.url,
            id: v4()
        })
        await newimage.save();
        res.json({ message: "Image added...", status: 200 });
    } catch (e) {
        console.log("Can't add image", e);
        res.json({ message: "Can't add image", status: 500, data: null });
    }
}

const getimages = async (req, res) => {
    try {
        const images = await ImageModel.find();
        res.json({ data: images, status: 200 });
    }
    catch (e) {
        res.json({ message: "Can't fetch images", status: 500 });
    }
}
const getimage = async (req, res) => {
    const id = req.params.id;
    try {
        const image = await ImageModel.findOne({ id: id });
        if (image)
            res.json({ data: image, status: 200 });
        else
            res.json({ message: "Image not found", status: 401 });
    } catch (e) {
        res.json({ message: "Can't get the image", status: 500 });
    }
}
const deleteimage = async (req, res) => {
    const id = req.params.id;
    try {
        const image = await ImageModel.findOneAndDelete({ id: id });
        if (image) {
            res.json({ message: "Image deleted", data: image, status: 200 });
        } else {
            res.json({ message: "Image not found", data: null, status: 404 });
        }
    }
    catch (e) {
        res.json({ message: "Can't delete the image", status: 500 });
    }
}
module.exports = { add, getimages, getimage, deleteimage };