const jwt = require("jsonwebtoken");
const { encrypt } = require("./encryption/encryption");  // Import encryption functions

// Secret key for signing the JWT (use a secure key in production)
const secretKey = "your-secret-key";  // You can store this in an environment variable

// Function to create a JWT token
function createJWT(userPayload) {
  const token = jwt.sign(userPayload, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour
  return token;
}

// Function to create an encrypted JWT (Encrypt the JWT before sending)
function createEncryptedJWT(userPayload) {
  const token = createJWT(userPayload);  // Create the JWT token
  const encryptedToken = encrypt(token); // Encrypt the token using the encryption function
  return encryptedToken;
}

// Example of usage with some user data
const userPayload = { username: "testuser", email: "test@example.com" };

const encryptedJWT = createEncryptedJWT(userPayload);
console.log("Encrypted JWT:", encryptedJWT);
