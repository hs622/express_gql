import dotenv from "dotenv";
import { app } from "./app";

dotenv.config({
  debug: true,
  path: "./.env",
});

// initializing core functionality here
// such environment variables, database connection, starting server.
const PORT = process.env.PORT || 8088;

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

