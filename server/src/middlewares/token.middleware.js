import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler";
// Importing user model for user-related operations
import userModel from "../models/user.model.js"

// Function to decode token from request headers
function tokenDecode(req) {
    try {
        // Getting the authorization header from the request
        const bearerHeader = req.headers["authorization"];

        // If authorization header is present
        if (bearerHeader) {
            // Splitting the header to get the token part
            const token = bearerHeader.split(" ")[1];

            // Verifying the token using jsonwebtoken library and secret key from environment variables
            return jsonwebtoken.verify(
                token,
                process.env.TOKEN_SECRET
            );
        }
        return false;
    } catch {
        return false;
    }
};

// Middleware function to authenticate user based on token
const auth = async (req, res, next) => {
    const tokenDecoded = tokenDecode(req);

    if (!tokenDecode) return responseHandler.unauthorized(res)
    
    const user = await userModel.findById(tokenDecode.data);

    if (!user) return responseHandler.unauthorized(res);

    req.user = user;

    next(); 
}

export default {
    auth,
    tokenDecode
};