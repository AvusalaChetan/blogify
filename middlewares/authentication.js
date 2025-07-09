const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    
    if (!tokenCookieValue) {
      req.user = null;
      return next();
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {
      console.log('Token validation error:', error.message);
      req.user = null;
    }
    
    next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
