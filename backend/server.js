import express from "express";
import auth from "./routes/auth.js";
import movie from "./routes/movie.js";
import tv from "./routes/tv.js";
import search from "./routes/search.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import { protectRoute } from "./middleware/protectRoute.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/auth", auth);
app.use("/api/v1/movie", protectRoute, movie);
app.use("/api/v1/tv", protectRoute, tv);
app.use("/api/v1/search", protectRoute, search);

//console.log(ENV_VARS.MONGO_URI);
const Port = ENV_VARS.PORT;
app.listen(Port, () => {
  console.log("Server is running on port 5001");
  connectDB();
});
