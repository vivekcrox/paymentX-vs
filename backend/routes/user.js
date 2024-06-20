// backend/routes/user.js
const express = require('express');
// const bcrypt=require('bcrypt');
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const  { authMiddleware } = require("../middleware");

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Data provided is incorrect"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
    const user = await User.create({
        username: req.body.username,
        password:req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })


    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
        const userId=user._id;
        const firstName=user.firstName;
        res.json({
            token: token,
            userId:userId,
            firstName:firstName
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})

const updateUserSchema = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
  });
  
  router.put("/update", authMiddleware, async (req, res) => {
    try {
      const { success, data } = updateUserSchema.safeParse(req.body);
      if (!success) {
        return res.status(400).json({ message: "Invalid update data", errors: data.error.details }); // Improved error message with details
      }
  
      const userId = req.userId; 
  
      const update = {
        $set: data, 
      };
  
      await User.updateOne({ _id: userId }, update);
  
      res.json({ message: "Updated successfully" });
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: "Internal server error" });
    }
  });
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
router.get('/info', authMiddleware, async (req, res) => {
    try {
      const userId = req.userId;
      const user = await User.findOne({ _id:userId});
      if (user) {
        const userId=user._id;
        res.json({ firstName: user.firstName,
                lastName: user.lastName,
                userId,
             email: user.email});
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  
module.exports = router;