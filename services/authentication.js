const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || "fallback-secret-key";
//seting cookies with jwt 

 function createTokenForUser(user){
    const payload={
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        ProfileImageURL:user.profileImage,
        role :user.role
    };
    const token =  jwt.sign(payload,secret,{expiresIn:'3d'})
    return token;
 }

function validateToken(token){
    try {
        const payload = jwt.verify(token, secret)
        return payload;
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
}

 module.exports = {createTokenForUser,validateToken}