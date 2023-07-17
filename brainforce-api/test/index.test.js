const { test } = require('node:test');  // Import the test function from node:test module
const request = require("supertest") // Import the supertest module
const baseURL = "http://localhost:3002" // Define the baseURL


test("POST /flashcard", async () => { // Define the test
    const response = await request(baseURL).post("/flashcard").send({ // Make a request to the baseURL
        number : 10, // Send the number of flashcards to create
        difficultyLevel : "easy", // Send the difficulty level of the flashcards
        subject : "math", // Send the subject of the flashcards
        optionalSection : "functions" // Send the optional section of the flashcards
    })
    expect(response.statusCode).toBe(200) // Expect the status code to be 200
    expect(response.body.success).toBe(true) // Expect the success property to be true
    expect(response.body.data).toBeDefined() // Expect the data property to be defined
})

// will get error if you dont have a valid api key in your env file or if you dont have the server running