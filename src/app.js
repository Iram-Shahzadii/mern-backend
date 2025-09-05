// const express = require('express');
// const aiRoutes = require('./routes/ai.routes')
// const cors = require('cors')

// const app = express()

// app.use(cors())


// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.use('/ai', aiRoutes)

// module.exports = app
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// routes
const aiRoutes = require('./routes/ai.routes');
app.use('/ai', aiRoutes);

module.exports = app; // make sure app is exported




