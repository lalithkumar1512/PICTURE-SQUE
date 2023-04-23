/**
 * @swagger
 * components:
 *   schemas:
 *     Posts:
 *       type: object
 *       required:
 *         - file
 *         - title
 *         - tag
 *         - email
 *         - desc
 *
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id
 *         file:
 *           type: string
 *           description: Picture
 *         title:
 *           type: string
 *           description: Title of Blog
 *         tag:
 *           type: string
 *           description: Tag
 *         email:
 *           type: string
 *           description: email id
 *         desc:
 *           type: string
 *           description: Description of blog
 *        
 */

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Posts managing API
 * /posts:
 *   post:
 *     summary: Create Post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/posts'
 *     responses:
 *       200:
 *         description: Created Post.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/posts'
 *       500:
 *         description: Server error
 * /getposts:
 *   post:
 *     summary: Lists all Posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: The list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/posts'
 *       500:
 *         description: Server error
 * 
 * /delete:
 *   post:
 *     summary: Delete post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/posts'
 *     responses:
 *       200:
 *         description: Deleted post.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/post'
 *       404:
 *         description: Post Not found
 *
 * /myposts:
 *   post:
 *     summary: Lists your posts
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/posts'
 *     responses:
 *       200:
 *         description: List of posts.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/posts'
 *       500:
 *         description: Server error
 *
 * /updatepost:
 *   post:
 *     summary: Update post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/posts'
 *     responses:
 *       200:
 *         description: Updated Post.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/posts'
 *       500:
 *         description: Server error
 * /ps:
 *   get:
 *     summary: Count of Posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Count of Posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/posts'
 */

const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
  file: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  likedb: [
    {
      type: String,
    },
  ],
});

const Posts = mongoose.model("Posts", PostsSchema);
module.exports = Posts;
