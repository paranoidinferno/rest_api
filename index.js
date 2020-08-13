const express = require('express');
const app = express();
const port = 3000;

//get api to return passed parameter.
app.get('/hello/:input', (req, res) => {
  res.json({ msg: "Hello " + req.params.input }).end();
})

//default response for incorrect url
app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" }).end();
})

app.listen(port, () => {
  console.log("Server running.");
});