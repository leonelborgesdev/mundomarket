import app from "./app";
import "./db";
// import http from 'http';
// const server = http.createServer(app);
// import { Server } from "socket.io";
// const io = new Server(server);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});


// io.on('connection', (socket) => {
//   console.log('a user connected');
// });