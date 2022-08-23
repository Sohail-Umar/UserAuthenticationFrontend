const user = require("../Models/user")
const UserModel = require("../Models/user")

const userGetController = (req, res) => {
    res.send("User Get Route Working")
}

const userSignUpController = async (req, res) => {

    const user = await UserModel.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    })
    res.status(200).json(user)

    res.send("User signup Route Working")
}

const userSignInController = async (req, res) => {
    console.log(req.body)
    const user = await UserModel.findOne({
        email: req.body.email
    })


    if (req.body.email != user.email) {
        res.status(401).json({ message: "USer Not Found" })
        return
    }

    else if (req.body.password != user.password) {
        res.status(401).json({ message: "Password Doesn't Match" })
        return
    }

    res.status(200).json({ message: "User signin Route Working" })
}


module.exports = { userGetController, userSignInController, userSignUpController }