let router = require('express').Router();
let userService = require('../services/userService');
let carService = require('../services/clothesService');

router.post('/register', async (req, res) => {
    let { email, password } = req.body;
    // console.log('User is: '+ req.body)

    try {
        let user = await userService.register({ email, password });
        let token = await userService.login({ email, password })

        res.json({
            _id: user._id,
            email: user.email,
            accessToken: token
        });
        
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }

});
router.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let { user, token } = await userService.login({ email, password });
    //console.log(req.headers);
    res.json({
        _id: user._id,
        email: user.email,
        accessToken: token
    });
});

router.get('/logout', (req, res) => {
    res.json({ ok: true })
})

router.get('/:id/myposts', async (req, res) => {
    try {
        let id = req.params.id;
        let posts = await userService.getPostsByUserId(id);
        console.log(posts);
        res.json({ posts });
    } catch (error) {
        console.error('Error getting user posts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;