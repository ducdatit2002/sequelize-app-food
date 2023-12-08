class AppError extends Error {
    constructor(statusCode, message) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  const handleErrors = (err, req, res, next) => {
    if (!(err instanceof AppError)) {
      err = new AppError(500, "Internal Server");
    }
  
    const { message, statusCode } = err;
    res.status(statusCode).json({
      status: "error",
      message: message,
    });
  
    
    next();
  };
  
  module.exports = {
    AppError,
    handleErrors,
  };