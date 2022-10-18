const {User} = require('../models/index')

class UserController{
    static async register(req,res,next){
        try{
            const {name, password, email, phoneNumber} = req.body
            const data = await User.create({name,password,email,phoneNumber})
            res.status(201).json({id:data.id, username: data.name, email: data.email})
        }catch(err){
            next(err)
        }
    }
}

module.exports = UserController