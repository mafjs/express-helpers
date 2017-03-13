module.exports = function () {

    return function (req, res) {
        res.sendCtxNow().notFound('resource not found', 'RESOURCE_NOT_FOUND');
    };

};
