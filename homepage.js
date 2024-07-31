const express = require('express');
const path = require('path');

const app = express();
const port = 5001;

app.use(express.static(path.join(__dirname, 'public')));

// Redirect start page
app.get("/", (req, res) => {
  res.redirect("/homepage");
  // res.send('hello world');
});

app.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});