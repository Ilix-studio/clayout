class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
module.exports=ErrorResponse;

//now we have the blueprint of error message we gonna have.
// import to error handler
