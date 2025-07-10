const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const blogModel = require("../models/blogModel");
const commentModel = require("../models/commentsModel");

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, `../public/images/uploads/`));
  },
  filename: function (req, file, cb) {
    const fn = Date.now() +'-'+ file.originalname;
    cb(null, fn);
  },
});
const upload = multer({ storage: storage });

router.get("/add-new", (req, res) => {
  res.render("addBlog", {
    user: req.user,
  });
});

// Use multer middleware for file upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content } = req.body;

    const blog = await blogModel.create({
      title,
      body: content,
      createdBy: req.user._id,
      coverImageUrl: `${req.file.filename}`,
    });

    return res.redirect(`/`);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id).populate("createdBy");
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    
    // Correct way to find comments by blogId
    const comments = await commentModel
      .find({ blogId: req.params.id })  
      .populate("createdBy");
        
    res.render("fullBlog", { 
      user: req.user, 
      blog, 
      comments 
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).send("Server error");
  }
});

router.post("/:id/comments", async (req, res) => {
  try {
    const { comment } = req.body;
    const blogId = req.params.id;

    const newComment = await commentModel.create({
      content: comment,
      blogId: blogId,
      createdBy: req.user._id,
    });

    // Redirect back to the blog page
    // res.render('fullBlog',{comment:newComment})
    res.redirect(`/blog/${blogId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
