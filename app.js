const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5100;
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
