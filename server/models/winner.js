/**
 * @swagger
 * components:
 *   schemas:
 *     ContestWinner:
 *       type: object
 *       required:
 *         - email
 *
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: Email id
 */

/**
 * @swagger
 * tags:
 *   name: ContestWinner
 *   description: Contest Winner managing API
 * /getcontestwinner :
 *   get:
 *     summary: Get Contest Winner 
 *     tags: [ContestWinner]
 *     responses:
 *       200:
 *         description: Contest winner
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/winner'
 * /contestwinner:
 *   post:
 *     summary: Create Contest Winner
 *     tags: [ContestWinner]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/winner'
 *     responses:
 *       200:
 *         description: Winner created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/winner'
 *       500:
 *         description: Server error
 * 
 */


const mongoose = require('mongoose');

const winnerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
})

const Winner = mongoose.model('Winner', winnerSchema);
module.exports = Winner;

