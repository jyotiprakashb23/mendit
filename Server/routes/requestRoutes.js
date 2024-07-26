import express from 'express';
import Request from '../model/Request.js';
import User from '../model/User.js';
import multer from 'multer';
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'duxt9ku6f',
    api_key: '839892145659782',
    api_secret: 'sTTyk18Klb8XrfDfFCJbmQZnH6w'
});

const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/requests', async (req, res) => {
    try {
        const users = await Request.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post('/create', upload.array('files', 10), async (req, res) => {
    let { user_id, service, phone, name, email, address } = req.body;
    let user = '';

    if (user_id && typeof user_id === 'string' && user_id.length === 24) {
        user = await User.findById(user_id);
    }

    if (!user) {
        const newUser = new User({ name, email, phone });
        try {
            await newUser.save();
        } catch (err) {
            return res.status(500).json({ reason: "error saving user in database", error: err.message });
        }
        user_id = newUser._id;
    }

    let fileURLs = [];
    for (const file of req.files) {
        try {
            const result = await cloudinary.uploader.upload(file.path, { resource_type: 'auto', public_id: file.filename });
            fileURLs.push(result.secure_url);
            fs.unlinkSync(file.path);
        } catch (error) {
            console.error("Error uploading file to Cloudinary:", error);
            return res.status(500).json({ reason: "error uploading file to Cloudinary", error: error.message });
        }
    }

    const requestItem = new Request({
        user_id, service, phone, address, media: fileURLs
    });

    try {
        await requestItem.save();
    } catch (err) {
        return res.status(500).json({ reason: "error saving request in database", error: err.message });
    }

    return res.status(200).json({
        message: "request saved successfully.",
        data: requestItem
    });
});

export default router;
