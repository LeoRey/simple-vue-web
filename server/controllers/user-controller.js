const {User} = require('../models/index')
const bcryptjs = require('bcryptjs')
const { createToken } = require('../helpers/jwt')

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
    static async login(req,res,next){
        try{
            const {email, password} = req.body
            const data = await User.findOne({where: { email }})
            if(!data){
                throw {name: 'Invalid username/password!'}
            }
            const verification = bcryptjs.compareSync(password, data.password)
            if(!verification){
                throw {name : 'Invalid username/password!'}
            }
            const payload = {
                id: data.id,
                email: data.email
            }
            const access_token = createToken(payload)
            res.status(200).json({access_token})
        }catch(err){
            next(err)
        }
    }
}

module.exports = UserController