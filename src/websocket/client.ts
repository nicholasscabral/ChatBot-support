import { io } from "../http";

io.on("connect", (socket) => {
  socket.on("client_first_access", (params) => {
    console.log(params);

    // salvar a conexão com o socket_id, user_id
  });
});
