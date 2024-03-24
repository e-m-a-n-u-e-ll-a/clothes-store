let router = require('express').Router();
let clothesService = require('../services/clothesService');
let userService = require('../services/userService');
let commentService = require('../services/commentService')
let { isAuth } = require('../middlewares/authMiddleware')
router.get('/catalog', async (req, res) => {

    try {
        let clothes = await clothesService.getAll();
        res.header('Content-Type', 'application/json');

        res.json(clothes);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(404).json({ error: 'Data not found' });
    }

});

router.post('/create', async (req, res) => {

    //console.log(req);
    await clothesService.create(req.body);
    //await userService.pushPost(req.user._id, createdPost)
    //await garmentService.create(req.body);
    res.json({ ok: true })
});

router.get('/catalog/:garmentId', async (req, res) => {
    let garment = await carService.getOne(req.params.garmentId);

    res.json(garment)
});

router.put('/catalog/:garmentId/edit', async (req, res) => {
    await carService.updatee(req.params.garmentId, req.body);
    res.json({ ok: true })
});

router.delete('/catalog/:garmentId/delete', async (req, res) => {
    await carService.delete(req.params.garmentId);
    res.json({ ok: true })
})



router.get('/catalog/:garmentId/comments', async (req, res) => {
    let comments = await commentService.getCommentsByCarId(req.params.garmentId);
    res.json(comments)
});
router.post('/catalog/:garmentId/comments', async (req, res) => {
    let data = req.body;
    let garmentId = req.params.carId;
    console.log(garmentId);

    let commentData = {
        email: data.email,
        text: data.text,
        garmentId: garmentId
    };

    let comment = await commentService.create(commentData);

    await garmentService.updateWithComments(garmentId, comment);

    res.json(comment);

});


module.exports = router;