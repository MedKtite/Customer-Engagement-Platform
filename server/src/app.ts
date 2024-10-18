import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  

const corsOptions = {
  origin: ["http://localhost:5173"]  
};

const app = express();
const PORT = 3020;

// Middleware
app.use(cors(corsOptions));   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello, TypeScript with Express!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
