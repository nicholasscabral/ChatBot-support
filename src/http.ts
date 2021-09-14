import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.json());
app.use(routes);

app.get("/teste", (req, res) => {
  return res.render("html/client.html");
});

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log("connected: ", socket.id);
});

export { http, io };
