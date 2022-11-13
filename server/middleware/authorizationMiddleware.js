const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "https://catcouture.com",
  issuerBaseURL: "https://dev-ejh1euf6.us.auth0.com/",
});

const checkScopes = requiredScopes("");

module.exports = {
  checkJwt,
  checkScopes,
};
