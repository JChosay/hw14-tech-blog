const router = require('express').Router();
const {Post, Comment, User} = require('../models');

//show homepage
router.get("/", async (req,res) => {
    try {
        //get the data
        const postData = await Post.findAll({
            include: [User]
        })
        //format the data into plain format
        const posts = postData.map((post) => {
            return post.get({plain:true})
        });
        //render - passing the data into the render function
        res.render('home', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;