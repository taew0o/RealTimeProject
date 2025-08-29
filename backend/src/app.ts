// Express APP(Middleware / Route)
import express, {Request, Response} from "express";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req : Request, res : Response) => {
    res.send("✅Server is running!");
});

export default app;