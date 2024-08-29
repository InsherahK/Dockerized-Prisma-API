const express = require('express');
const bodyParser = require('body-parser');

const { PrismaClient } = require('@prisma/client');


require('dotenv').config(); // Load environment variables from .env

const prisma = new PrismaClient();
const app = express();
app.use(bodyParser.json());

// Create a new user
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.users.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send('Server error');
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const allUsers = await prisma.users.findMany();
    res.status(200).json(allUsers);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Server error');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
