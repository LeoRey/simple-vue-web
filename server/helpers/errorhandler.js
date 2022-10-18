async function errorHandler(err,req,res,next){
    code = 500
    message = "Internal Server Error!"
    if(err.name === "SequelizeValidationError" || err.name === 'SequelizeUniqueConstraintError'){
        code = 400
        message = err.errors[0].message
    }else if(err.name === 'Invalid username/password!'){
        code = 401
        message = 'Invalid username/password!'
    }
    res.status(code).json({message})
}

module.exports = errorHandler