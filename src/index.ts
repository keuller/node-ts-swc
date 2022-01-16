import express from "express";
import router from './routes.js';

const PORT = 4000;
const app = express();

app.use(express.json());
app.use('/', router)
app.disable('x-powered-by');

app.listen(PORT, () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
