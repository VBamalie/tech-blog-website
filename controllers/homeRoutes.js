const router = require("express").Router();
const { Post, Comment, User } = require("../models");
// const withAuth = require("../utils/auth")

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try{
        const dbPostData = await Post.findAll(
        //     {
        //     include:[{model: Comment}]
        // }
        );
        const postGallery = dbPostData.map((posts)=> posts.get({plain:true})
        );
        res.render("posts", 
            postGallery
        );
    }catch (err) { res.status(500).json(err)}
});