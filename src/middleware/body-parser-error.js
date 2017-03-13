module.exports = function (logger) {

    return function (error, req, res, next) {

        if (error) {

            if (error instanceof SyntaxError) {
                res.status(400).json({
                    error: {
                        message: 'Invalid Json Body',
                        code: 'INVALID_JSON'
                    }
                });
                return;
            } else {

                if (logger) {
                    logger.error(error);
                } else {
                    console.log(error);
                }

                res.status(500).json({
                    error: {
                        message: 'Server Error',
                        code: 'SERVER_ERROR'
                    }
                });

                return;
            }

        }

        next();
    };

};
