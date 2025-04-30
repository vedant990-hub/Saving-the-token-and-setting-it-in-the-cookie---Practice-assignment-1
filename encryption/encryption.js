const crypto = require("crypto");

// AES algorithm with 256-bit key size and CBC mode
const algorithm = "aes-256-cbc";

// Generating a 32-byte key (for AES-256) and a 16-byte IV (for CBC mode)
const key = crypto.randomBytes(32);  // 32 bytes = 256 bits for AES-256
const iv = crypto.randomBytes(16);   // 16 bytes for CBC mode

// Encrypt function to encrypt text using AES-256-CBC
function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex"); // Encrypt input as 'utf8' and output as 'hex'
  encrypted += cipher.final("hex"); // Finalize the encryption process
  return encrypted;  // Return the encrypted text in hex format
}

// Decrypt function to decrypt the encrypted text using AES-256-CBC
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8"); // Decrypt input as 'hex' and output as 'utf8'
  decrypted += decipher.final("utf8");  // Finalize the decryption process
  return decrypted; // Return the decrypted text in 'utf8'
}

// Export the encrypt and decrypt functions
module.exports = { encrypt, decrypt };

// For testing purposes: Encrypt and decrypt a sample text
if (require.main === module) {
  const sampleText = "Hello, World!";
  
  console.log("Original Text:", sampleText);
  
  const encryptedText = encrypt(sampleText);
  console.log("Encrypted Text:", encryptedText);
  
  const decryptedText = decrypt(encryptedText);
  console.log("Decrypted Text:", decryptedText);
}
