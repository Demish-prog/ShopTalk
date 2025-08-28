const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('EchoCart Backend Running 🚀');
});

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
