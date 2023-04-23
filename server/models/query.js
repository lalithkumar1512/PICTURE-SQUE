/**
 * @swagger
 * components:
 *   schemas:
 *     Queries:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - query
 *
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id
 *         username:
 *           type: string
 *           description: Name
 *         email:
 *           type: string
 *           description: email id
 *         query:
 *           type: string
 *           description: Query to ask
 */

/**
 * @swagger
 * tags:
 *   name: Queries
 *   description: Queries managing API
 * /getqs:
 *   get:
 *     summary: Lists all Queries
 *     tags: [Queries]
 *     responses:
 *       200:
 *         description: The list of queries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/query'
 * /deleteqs:
 *   post:
 *     summary: Delete queries
 *     tags: [Queries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/query'
 *     responses:
 *       200:
 *         description: Deleted Query.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/query'
 *       404:
 *         description: Registration Not found
 *
 * /contactus:
 *   post:
 *     summary: Create Query
 *     tags: [Queries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/query'
 *     responses:
 *       200:
 *         description: Created Query.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/query'
 *       500:
 *         description: Server error
 *
 */



const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    }
})

const Query = mongoose.model('Query', querySchema);
module.exports = Query;