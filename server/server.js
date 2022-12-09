import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import adm_router from "./routes/admin.js";
import vol_router from "./routes/volunteer.js";
import router from "./routes/general.js";

dotenv.config();
const server = express();
server.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );
server.use(express.json());
server.use('/',router);
server.use('/admin',adm_router);
server.use('/volunteer',vol_router);



server.listen(1008, (err) => {
    if(!err){
        console.log("Server Connected 1008");
    }
})

