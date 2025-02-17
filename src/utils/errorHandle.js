function errorHandler(err, req, res, next) {
  console.error(err.stack); // Log error for debugging

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
  });
}

module.exports = errorHandler;
