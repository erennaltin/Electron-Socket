const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("Send", (msg) => {
    socket.emit("Receive", `Hello ${msg}. Succesfully completed.`);
  });
});

io.on("send", (socket) => {
  console.log(socket);
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
