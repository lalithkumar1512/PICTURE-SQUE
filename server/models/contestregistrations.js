/**
 * @swagger
 * components:
 *   schemas:
 *     ContestRegistrations:
 *       type: object
 *       required:
 *         - fullname
 *         - email
 *         - place
 *         - file
 *
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id
 *         fullname:
 *           type: string
 *           description: Name
 *         email:
 *           type: string
 *           description: email id
 *         place:
 *           type: string
 *           description: Place
 *         file:
 *           type: string
 *           description: Picture
 */

/**
 * @swagger
 * tags:
 *   name: ContestRegistrations
 *   description: Contest registrations managing API
 * /getcrs:
 *   get:
 *     summary: Lists all contest registrations
 *     tags: [ContestRegistrations]
 *     responses:
 *       200:
 *         description: The list of contest registrations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/contestregistrations'
 * /deletecrs:
 *   post:
 *     summary: Delete contest registration by email
 *     tags: [ContestRegistrations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/contestregistrations'
 *     responses:
 *       200:
 *         description: Deleted registration.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/contestregistrations'
 *       404:
 *         description: Registration Not found
 *
 * /contestregistrations:
 *   post:
 *     summary: Create contest registration
 *     tags: [ContestRegistrations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './models/contestregistrations'
 *     responses:
 *       200:
 *         description: Created registration.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: './models/contestregistrations'
 *       500:
 *         description: Server error
 *
 * /cr:
 *   get:
 *     summary: Count of contest registrations
 *     tags: [ContestRegistrations]
 *     responses:
 *       200:
 *         description: Count of contest registrations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/contestregistrations'
 */

const mongoose = require("mongoose");

const contestregistrationsSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});

const contestregistrations = mongoose.model(
  "contestregistrations",
  contestregistrationsSchema
);
module.exports = contestregistrations;
