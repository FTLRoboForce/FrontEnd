const validateFields = require("../utils/validate").validateFields;
const {test} = require('node:test');

test("validateFields works: all fields provided", () => {
    const data = {
        email: "test123@email.com",
        password: "123456789",
        firstName: "test",
        lastName: "test"
    }; // Define the data
    const requiredFields = ["email", "password", "firstName", "lastName"]; // Define the required fields
    expect(() => validateFields({ required: requiredFields, obj: data })).not.toThrow(); // Expect the validateFields function to not throw an error
});
