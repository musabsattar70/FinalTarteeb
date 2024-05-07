const jwt = require("jsonwebtoken");

const GenerateToken = (user) => {
    // Secret key to sign the JWT
    const secretKey = "LKSN@O#IHH@)HD@)xzn02hs20bnx02nb";
    // Create a JWT token
    const token = jwt.sign(user, secretKey, { expiresIn: "24h" }); // Token expires in 1 hour
    return token;
};

const VerifyToken = (token) => {
    jwt.verify(token, secretKey, (err, decoded) => {
        return err ? true : false;
    });
};

module.exports = { GenerateToken, VerifyToken };
