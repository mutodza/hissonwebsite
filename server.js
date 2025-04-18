const express = require('express');
const helmet = require('helmet');

const app = express();

// Use Helmet to add secure headers
app.use(helmet());

// Serve your static files
app.use(express.static('public')); // Replace 'public' with your folder containing HTML/CSS/JS files

// Start the server
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
