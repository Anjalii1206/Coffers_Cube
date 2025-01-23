import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = 5000;


//middleware
app.use(express.json())
app.use(cors())               //access bkend from frontend

//db connection
 connectDB();

//API endpoint
app.use('/api/food',foodRouter);
app.use("/images",express.static("uploads"));

app.get('/', (req, res) => {
    res.send('API working');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


//mongodb+srv://anjali12:kyQJR9DoBbaPggFI@cluster0.llxp9.mongodb.net/?