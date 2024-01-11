const express = require('express');
const app = express();

const routes = require("./routes/index.js");

app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started on port ${port}`)
});

