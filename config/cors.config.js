// const { options } = require("../routes/course.route");

const allowList= [
    'http://localhost:4200',
    'http://localhost:80',
    'http://localhost',
]

const corsOptions = {
    credentials: true,
    optionsSuccessStatus: 200,
    origin: allowList
}

module.exports = corsOptions;