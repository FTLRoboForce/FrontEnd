const bcrypt = require('bcrypt');
const User = require('../models/user');
const { BadRequestError } = require('../errors'); 
const db = require('../db'); // Assuming you have a database connection

jest.mock('../db'); // Mock the db module



// Clear the necessary tables or collections
const clearDatabase = async () => {
  await db.query('TRUNCATE TABLE users CASCADE'); // Example for PostgreSQL, adjust for your database
  // Add more truncate/drop statements for other tables or collections if needed
};

// Run the clearDatabase function before each test
beforeEach(async () => {
  await clearDatabase();
});

describe('User Model - register', () => {
  beforeEach(() => {
    // Reset the mock implementation for each test
    db.query.mockReset();
  });

  test('should register a new user', async () => {
    // Mock the db query method to return a mock user
    const mockUser = {
      id: 2,
      email: 'test123456@email.com',
      firstname: 'test',
      lastname: 'Test',
      username: 'testdoe',
      points: 0
    };
    db.query.mockResolvedValueOnce({
      rows: [mockUser]
    });

    // Mock the bcrypt hash method to return a hashed password
    bcrypt.hash = jest.fn().mockResolvedValueOnce('hashedPassword');

    // Mock the normalized email value
    const normalizedEmail = 'test123456@email.com'.toLowerCase();

    // Mock the credentials
    const creds = {
      email: 'test123456@email.com',
      password: 'password',
      firstname: 'test',
      lastname: 'Test',
      username: 'testdoe',
      points: 0
    };

    // Call the register function
    const user = await User.register(creds);

    // Check the expected database query
    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining('INSERT INTO users'),
      expect.arrayContaining([
        'hashedPassword',
        'test',
        'Test',
        'testdoe',
        normalizedEmail,
        0
      ])
    );

    // Check the returned user
    expect(user).toEqual(mockUser);
  });

  test('should throw BadRequestError for duplicate email', async () => {
    // Mock the db query method to return an existing user
    const existingUser = {
      id: 1,
      email: 'test123456@email.com',
      firstname: 'test',
      lastname: 'Test',
      username: 'testdoe',
      points: 0
    };
    db.query.mockResolvedValueOnce({
      rows: [existingUser]
    });

    // Mock the normalized email value
    const normalizedEmail = 'test123456@email.com'.toLowerCase();

    // Mock the credentials
    const creds = {
      email: 'test123456@email.com',
      password: 'password',
      firstname: 'test',
      lastname: 'Test',
      username: 'testdoe',
      points: 0
    };

    // Call the register function and expect it to throw BadRequestError
    await expect(User.register(creds)).rejects.toThrow(
      new BadRequestError(`Duplicate email: ${creds.email}`)
    );

    // Check the expected database query
    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining('SELECT * FROM users WHERE email ='),
      expect.arrayContaining([normalizedEmail])
    );
  });

  // Could Add more tests for other scenarios, such as password length, username length, etc.
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
