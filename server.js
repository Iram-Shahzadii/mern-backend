// require('dotenv').config()
// const app = require('./src/app')


// app.get('/', (req, res) => {
//     res.send({
//         activeStatus: true,
//         error:false,
//     })
        
//     })
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000')
// })
require('dotenv').config(); // ✅ .env load

console.log(
  "Gemini key loaded:", 
  process.env.GOOGLE_GEMINI_KEY ? "✅ Yes" : "❌ No"
);

// ✅ Backend app import karo
const app = require('./src/app');

// ✅ Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
