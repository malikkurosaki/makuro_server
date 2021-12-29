const express = require('express');
const Api = express.Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const expresAsyncHandler = require('express-async-handler');


Api.get('/user', expresAsyncHandler(async (req, res) => {
    let usr = await prisma.user.findMany();
    res.json(usr);
}));




module.exports = Api;