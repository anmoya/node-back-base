export default {
  port: 0, // APPs LISTENING PORT
  dbUri: "", // MONGO DB URI
  saltWorkFactor: 0, // SALT FACTOR FOR JWT
  accessTokenTTL: "15m", // EXPIRATION TIME FOR ACCESS TOKEN JWT
  refreshTokenTTL: "1y", // EXPIRATION TIME FOR REFRESH TOKEN JWT
  privateKey: ``, // GENERATED PRIVATE KEY
  publicKey: `` // GENERATED PUBLIC KEY
};
