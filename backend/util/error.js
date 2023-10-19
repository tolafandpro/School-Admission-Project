const errorHandler = (err, req, res, next ) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: err.stack
    }) 
}

const notFound = (req, res, next) => {
    const error = new Error(`Can't find: ${req.originaUrl}`);
    res.status(404);
    next(error);
}


module.exports = { errorHandler, notFound };