const e = require('express'); // Import the express module
const {test} = require('node:test'); // Import the test function from node:test module
const request = require("supertest") // Import the supertest module
const baseURL = "http://localhost:3002" // if using process.env.PORT then change this to 3002

test("POST /login", async () => { // Define the test
    const response = await request(baseURL).post("/login").send({ // Make a request to the baseURL
        email : "test123@email.com", // set the email  field
        password: "123456789" // set the password field

})
expect(response.statusCode).toBe(200) // Expect the status code to be 200
expect(response.body.token).toBeDefined() // Expect the token property to be defined
})

//can i have multiple endpoint test in one file ?
test("POST /register", async () => {
    const response = await request(baseURL).post("/register").send({
        email : "test123@gmail.com",
        password: "123456789",
        firstName: "test",
        lastName: "test"

})
expect(response.statusCode).toBe(201)
expect(response.body.user).toBeDefined()})