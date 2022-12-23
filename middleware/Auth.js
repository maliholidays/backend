// const token = require('jsonwebtoken');
// const JWTSIGN = "maliholidays45";

// const fetchUsers = async(req,res,next)=>{
//     const token = await req.headers('auth-token');
//     if(!token){
//         res.json({error:"unauthorised access"})
//     }
//     try{
//         const data = await JWTSIGN.verify(token,JWTSIGN)
//         req.user = data.user
//         next();
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
// module.exports = fetchUsers;