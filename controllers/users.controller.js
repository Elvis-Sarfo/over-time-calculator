'use strict;'
// CREATE USER
const creatUser=async(req,res,next)=>{
    const {nic,name,department,telephone,email,password,role}=req.body
    const sql='INSERT INTO users (nic,name,department,telephone,email,password,role) VALUES (?,?,?,?,?,?,?)';
    const hashpass=await bcrypt.hash(password,12)
    db.query(sql,[nic,name,department,telephone,email,hashpass,role],(err,result)=>{
        if(err){
        res.send(err)
        }else{
        res.send('created');
        }
  })
}
// READ USER
const readUser=(req,res,next)=>{
    
}
// UPDATE USER
const updateUser=(req,res,next)=>{
    
}
// DELETE USER
const deleteUser=(req,res,next)=>{
    
}

module.exports={
    creatUser,
    readUser,
    updateUser,
    deleteUser
}