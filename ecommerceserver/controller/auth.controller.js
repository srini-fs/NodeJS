const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs"); //encrypt sensitive data(password) into hashing using bcryptjs

exports.signup = (req, res) => {

};


// generate token on Signin
exports.signin = (req, res) => {
    // var user = {username:req.body.username, pwd:bcreq.body,pwd}

    const token = jwt.sign({ id: 123 },
        config.secret,
        {
            algorithm: "HS256",
            allowInsecureKeySizes: true,
            expiresIn: 86400, //24 hours
        });

        res.status(200).send({
            id: 123,
            username: "Test123",
            accesstoken: token
        });
};