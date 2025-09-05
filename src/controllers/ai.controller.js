// const aiServices = require("../services/ai.services")


// module.exports.getReview = async (req, res) => {

//     const code = req.body.code;

//     if (!code) {
//         return res.status(400).send("Prompt is required");
//     }

//     const response = await aiServices(code);


//     res.send(response);

// }
const aiServices = require("../services/ai.services");

module.exports.getReview = async (req, res) => {
    try {
        const prompt = req.body.prompt;

        if (!prompt) {
            return res.status(400).send("Prompt is required");
        }

        const response = await aiServices(prompt);

        res.send({ review: response }); // backend returns { review: ... }
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

