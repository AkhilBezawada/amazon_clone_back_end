//library include
require('dotenv').config();

const exxpress = require('express');
const app = exxpress();
const cors = require('cors');
const morgan = require('morgan');
const port =process.env.PORT;

app.use(cors());
app.use(morgan('dev'));


//route
app.get('/', (req,res) => {
    return res.status(200).json({
        "status": true,
        "message": "Amazon Clone REST API Page"
    });
});

app.listen(port,() => {
    console.log("Server running at port : "+port);
});