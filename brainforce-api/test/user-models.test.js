// const {test} = require('node:test');
const User = require("../models/user");
const bcrypt = require("bcrypt");
const db = require("../db");

jest.mock("bcrypt");
jest.mock("../db");

describe("register function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should register a new user successfully", async () => {
    const creds = {
      email: "test123@email.com",
      password: "12345678",
      firstname: "test",
      lastname: "test",
      username: "test",
      points: 0,
    };

    const expectedUser = {
      id: 1,
      email: creds.email.toLowerCase(),
      password: "hashedPassword",
      firstname: creds.firstname,
      lastname: creds.lastname,
      username: creds.username,
    };

    // Mock the required functions and return values
    const validateFieldsMock = jest.fn();
    validateFieldsMock.mockImplementationOnce(() => {
      // no error, validation passes
    });

    const fetchUserByEmailRegisterMock = jest.fn();
    fetchUserByEmailRegisterMock.mockResolvedValueOnce(null);

    bcrypt.hash.mockResolvedValueOnce("hashedPassword");

    db.query.mockResolvedValueOnce({
      rows: [expectedUser],
    });

    // Call the register function
    const result = await User.register(creds);

    // Assertions
    expect(validateFieldsMock).toHaveBeenCalledTimes(1);
    expect(fetchUserByEmailRegisterMock).toHaveBeenCalledTimes(1);
    expect(bcrypt.hash).toHaveBeenCalledTimes(1);
    expect(db.query).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expectedUser);
  });
});

test("should handle duplicate email during registration", async () => {
    const creds = {
      email: "test121@emal.com",
      password: "12345678",
      firstname: "test",
      lastname: "test",
      username: "test",
      points: 0,
    };
  
    // Mock the required functions and return values
    const validateFieldsMock = jest.fn();
    validateFieldsMock.mockImplementationOnce(() => {
      // no error, validation passes
    });
  
    const fetchUserByEmailRegisterMock = jest.fn();
    fetchUserByEmailRegisterMock.mockResolvedValueOnce({
      rows: [
        {
          id: 2,
          email: creds.email.toLowerCase(),
          password: "hashedPassword",
          firstname: "existing",
          lastname: "user",
          username: "existingUser",
        },
      ],
    });
  
    // Call the register function and expect it to throw an error
    await expect(User.register(creds)).rejects.toThrowError(
      "Duplicate email: test123@email.com"
    );
  
    // Assertions
    expect(validateFieldsMock).toHaveBeenCalledTimes(1);
    expect(fetchUserByEmailRegisterMock).toHaveBeenCalledTimes(1);
  });




  

// test("userRegister should return true if registration is a succes", () => {
//     const email = "test123@emal.com"
//     const password = "123456789"
//     const firstName = "test"
//     const lastName = "test"
//     const username = "test"
//     const points = 0
//     const result = userRegister({email, password, firstName, lastName, username, points})
//     expect(result).toBe(true)
// });

// test("userRegister should return false if registration is a failure", () => {
//     const email = "test"
//     const password = "1"
//     const firstName = "tt"
//     const lastName = ""
//     const username = "tt"
//     const points = 0
//     const result = userRegister({email, password, firstName, lastName, username, points})
//     expect(result).toBe(false)
// });
