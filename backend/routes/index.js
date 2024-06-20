const express = require('express');

const cors=require('cors')
const userRouter = require("./user");
const accountRouter=require('./account')
const router = express.Router();

const app=express();
app.use(cors());

router.use('/user',userRouter)
router.use('/account',accountRouter);

module.exports = router;