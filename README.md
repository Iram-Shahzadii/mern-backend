# 🤖 AI-Powered Code Reviewer (Backend)

This is the *backend* service for the *AI Code Reviewer Project, built using **Node.js + Express* with integration of *Google Gemini AI API*.  
It provides APIs that analyze submitted code, detect potential issues, and suggest improvements using *AI-powered review capabilities*.  

---

## 🚀 Features
- AI-powered code analysis (Google Gemini API integration)
- RESTful API endpoints for submitting & reviewing code
- Scalable backend structure with Express.js
- Error handling & environment-based configuration
- Easy to integrate with the React-based frontend

---

## 🛠️ Tech Stack
- *Node.js* + *Express.js* – Backend framework  
- *Google Gemini AI API* – Code analysis & suggestions  
- *dotenv* – Secure environment configuration  
- *Nodemon* – Development hot-reload  

---

## 📂 Project Structure

mern-backend/ │── src/ │   ├── controllers/    # API controllers │   ├── routes/         # API routes │   ├── services/       # AI service (Gemini API integration) │   └── app.js          # Express app setup │── server.js           # Entry point │── .env                # Environment variables │── package.json        # Dependencies & scripts

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Iram-Shahzadii/mern-backend.git
cd mern-backend

2️⃣ Install dependencies

npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=3000
GOOGLE_GEMINI_KEY=your_api_key_here

⚠️ Note: Never commit .env to GitHub. Make sure it’s added in .gitignore.

4️⃣ Run the server

For development:

npm run dev

Server will start on:
👉 http://localhost:3000


---

📡 API Endpoints

🔹 AI Code Review

POST /api/review → Submit code for review
Request body example:

{
  "code": "function sum(a, b) { return a + b; }"
}

Response example:

{
  "issues": ["No input validation"],
  "suggestions": ["Add type checking for inputs"]
}



---

📌 Notes

This backend uses Google Gemini AI, so you must configure a valid API key in .env.

No MongoDB database is required in this project (stateless AI service).

Designed to work with the mern-frontend of this project.



---

📜 License

This project is licensed under the MIT License.


