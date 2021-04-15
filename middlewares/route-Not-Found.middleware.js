function routeNotFound(req,res){
  res.status(404).json({success:false,message:"The route you are looking for coulnt be found"});
};


module.exports={routeNotFound}