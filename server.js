require('dotenv').config()
console.log("Gemini key loaded:", process.env.GOOGLE_GEMINI_KEY ? "✅ Yes" : "❌ No");
const app = require('./src/app')



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})



