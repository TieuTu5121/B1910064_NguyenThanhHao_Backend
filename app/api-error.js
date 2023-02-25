<<<<<<< HEAD
class ApiError extends Error {
=======
class ApiError extends Error{
>>>>>>> 577f307cf374e0ef3c76f2f7c6666887b8c4a972
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

<<<<<<< HEAD
module.exports = ApiError;
=======
module.exports =ApiError;
>>>>>>> 577f307cf374e0ef3c76f2f7c6666887b8c4a972
