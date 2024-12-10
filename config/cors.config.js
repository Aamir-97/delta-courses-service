// const { options } = require("../routes/course.route");

const allowList= [
    'http://localhost:4200',
]

const corsOptions = {
    credentials: true,
    optionsSuccessStatus: 200,
    origin: allowList
}

module.exports = corsOptions;