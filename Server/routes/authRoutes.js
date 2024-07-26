import express from 'express'
const router = express.Router();

router.post('/login', (req, res) => {
    
    return res.json({
        "message": "testing route login"
    })
});

router.post('/signup', (req, res) => {
    
    return res.json({
        "message": "testing route signup"
    })
});

export default router;