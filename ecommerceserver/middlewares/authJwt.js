const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js"); //to generate/validate/refresh token

exports.verifyToken = (req, res, next) => {  // (request, response, middleware)
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({message: "No token provided!"});
    }
    jwt.verify(token,
        config.secret,
        (err, decoded) => {
            if(err) {
                return res.status(401).send({
                    message: "Unauthorized!",
                });
            }
            // return user details if valid token;
            next();
        });
};