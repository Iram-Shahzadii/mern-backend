// const aiService = require("../services/ai.service")


// module.exports.getReview = async (req, res) => {

//     const code = req.body.code;

//     if (!code) {
//         return res.status(400).send("Prompt is required");
//     }

//     const response = await aiService(code);


//     res.send(response);

// }
const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    try {
        console.log("REQ HEADERS:", req.headers);  // Debugging
        console.log("REQ BODY:", req.body);        // Debugging

        const code = req.body?.code; // Safe access

        if (!code) {
            return res.status(400).json({ error: "Code is required", received: req.body });
        }

        const response = await aiService(code);

        return res.json({ success: true, data: response });
    } catch (error) {
        console.error("Controller Error:", error);
        return res.status(500).json({ error: "Something went wrong", details: error.message });
    }
};


