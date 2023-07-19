const express = require("express")
const cors = require('cors')
require("dotenv").config()
const {Configuration, OpenAIApi} = require("openai")
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

const config = new Configuration({
    apiKey : process.env.OPEN_AI_KEY,
})


const openAi = new OpenAIApi(config)
app.get("/", (req,res) => {
    res.send({ping : "pong"})})

app.post("/flashcard", async (req,res) => {
    const { number, difficultyLevel, subject, optionalSection } = req.body
    try{
        const response = await openAi.createChatCompletion({
            model : "gpt-3.5-turbo",
            messages:[{role: 'user',content : `Create ${number} unique ${difficultyLevel} flashcard(s) about ${subject} specifically ${optionalSection}.
            The question(s) are meant for academic uses so don't include too broad question(s). Response should be returned as an array of json objects where the response would look like:
            [{"question" : "What is the general formula for alkane?", "answer": "CnH2n+2"}]`
        }], max_tokens: 100, temperature:.8,top_p: 1.0,frequency_penalty: 2.0,presence_penalty: 2.0
        })
        return res.status(200).json({
            success : true,
            data : response.data.choices[0].message
        }
        )
    }
    catch(error){
        return res.status(400).json({

            success : false,
            error : error.response ? error.response.data : "There was an issue on the server"
        })

    }

})


app.post("/quiz", async (req,res) => {
    const { number, difficultyLevel, subject, optionalSection } = req.body
    try{
        const response = await openAi.createChatCompletion({
            model : "gpt-3.5-turbo",
            messages: [{role : "user", content: `Create ${number} unique ${difficultyLevel} multiple-choice questions about ${subject} specifically ${optionalSection}. 
            ### It should be stored as an array of json objects where the question,options and answer are stored as key-value pairs such as:
            {
                question: "What is the capital of France?",
                options: ["New York", "London", "Paris", "Dublin"],
                answer: "Paris"
              }
            `}],temperature: 1.5, max_tokens: 100, top_p: 1.0, frequency_penalty: 2.0, presence_penalty: 2.0
        })
        return res.status(200).json({
            success : true,
            data : response.data.choices[0].message
        }
        )
    }
    catch(error){
        return res.status(400).json({

            success : false,
            error : error.response ? error.response.data : "There was an issue on the server"
        })

    }

})


const port = process.env.PORT || 3002

app.listen(port, () => console.log(`Server listening on port ${port}`))
