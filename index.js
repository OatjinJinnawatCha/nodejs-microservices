const express = require('express');
const memberRoutes = require('./src/routes/memberRoutes');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

// Routes
app.use('/api/v1', memberRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});