function errorHandler(err,req,res,next){
  console.error(err.stack) //to log the the error to the server console.
  res.status(500).json({ success: false, message: err.message })
}


module.exports={errorHandler}