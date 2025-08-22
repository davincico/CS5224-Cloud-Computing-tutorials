// To optimize for serving react app over the internet for performance and security, we need to use ExpressJS to serve the production build
const express = require('express');
const app = express();

//serve up production assets
app.use(express.static('testapp/build'));

//serve up the index.html if the route is not recognized
const path = require('path');
app.get('/{*any}', (req, res) => { // NOTE: DO NOT USE * but use /{*any}
    res.sendFile(path.resolve(__dirname, 'testapp', 'build', 'index.html'));
});

// If not in production, use port 8080 or the env port
const PORT = process.env.PORT || 8080;
console.log(`Listening on port ${PORT}`);
app.listen(PORT);
