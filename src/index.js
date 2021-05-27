import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "App is running!" });
});

app.listen(3333);
