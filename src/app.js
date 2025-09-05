// const express = require('express');
// const aiRoutes = require('./routes/ai.routes');
// const cors = require('cors');

// const app = express();

// // ✅ Allow requests only from your Netlify frontend
// app.use(cors({
//     origin: 'https://sparkling-pegasus-f90e71.netlify.app', // replace with your Netlify URL
//     methods: ['GET', 'POST'],
//     credentials: true
// }));

// app.use(express.json());

// // ✅ Test route
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// // ✅ AI routes
// app.use('/ai', aiRoutes);

// module.exports = app;
const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// ✅ CORS enable
app.use(cors());
app.options('*', cors()); // Preflight requests ke liye

// ✅ JSON parse
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// ✅ AI routes
app.use('/ai', aiRoutes);

module.exports = app;