// // // server.js

// // // 1️⃣ dotenv ko sabse upar load karo
// // require('dotenv').config();

// // 2️⃣ Gemini key check (debugging ke liye)
// console.log(
//   "Gemini key loaded:", 
//   process.env.GOOGLE_GEMINI_KEY ? "✅ Yes" : "❌ No"
// );

// // 3️⃣ Backend app import karo
// const app = require('./src/app');

// // 4️⃣ Server start karo
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
// 3️⃣ Backend app import karo
const app = require('./src/app');

// ✅ Railway automatically environment variables inject karta hai, dotenv ki zarurat nahi
console.log("Gemini key loaded:", process.env.GOOGLE_GEMINI_KEY ? "✅ Yes" : "❌ No");

// 4️⃣ Server start karo
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

