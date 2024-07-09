import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/jokes', (req, res) => {
  try {
    const jokes = [
      { id: 1, title: "LockManr", content: "hdh" },
      { id: 2, title: "Locnr", content: "hdedh" },
    ];
    res.send(jokes);
  } catch (error) {
    console.error("Error fetching jokes:", error);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 3909;

app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server:", err);
  } else {
    console.log("Server is running on port", port);
  }
});
