// Express APP(Middleware / Route)
import express, {Request, Response} from "express";
import cors from "cors"
import userRoutes from "./Routes/UserRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

//router 연결
app.use('/users', userRoutes);


app.get("/api/health", (req : Request, res : Response) => {
    res.send("✅Server is running!");
});

export default app;