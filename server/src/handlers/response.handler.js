// Desc: Response handler middleware
const responseWithData = (res, statusCode, data) => {
    res.status(statusCode).json(data);
}

const error = (res) => {
    responseWithData(res, 500, 'Internal Server Error')
}

const badrequest = (res, message) => {
    responseWithData(res, 400, message);
}

const ok = (res, data) => {
    responseWithData(res, 200, data);
}

const created = (res, data) => {
    responseWithData(res, 201, data);
}

const unauthorized = (res) => {
    responseWithData(res, 401, "unauthorized");
}

const notfound = (res) => {
    responseWithData(res, 404, "not found");
}

export default {
    error,
    badrequest,
    ok,
    created,
    unauthorized,
    notfound
}