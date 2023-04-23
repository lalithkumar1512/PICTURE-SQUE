/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *         - phnumber
 *         - picture
 *
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         username:
 *           type: string
 *           description: Your name
 *         password:
 *           type: string
 *           description: Your password
 *         email:
 *           type: string
 *           description: Your email id
 *         phnumber:
 *           type: string
 *           description: Your Phone number
 *         picture:
 *           type: string
 *           description: Your profile picture
 *       example:
 *         id: d5fE_asz
 *         username: Lalith
 *         password: lalith
 *         email: lalith@gmail.com
 *         phnumber: 9876543213
 *         picture: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEMG3RIsYYPc5e25F4NAMSXK9Z0NRKPmJ1w&usqp=CAU
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /getusers:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/user'
 * /register:
 *   post:
 *     summary: Create user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/user'
 *     responses:
 *       200:
 *         description: Created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/user'
 *       500:
 *         description: Server error
 * 
 * /deleteuser:
 *   post:
 *     summary: Delete user by email
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/user'
 *     responses:
 *       200:
 *         description: Deleted user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/user'
 *       404:
 *         description: User not found
 * /us:
 *   get:
 *     summary: Count of Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Count of Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/users'
 */

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phnumber: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
