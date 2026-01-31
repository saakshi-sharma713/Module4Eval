import { supabase } from "../Config/Supabase.config.js";

export const createUser = async(req,res)=>{
  const{name,email,password,role}=req.body;
  if(!name||!email||!password||!role) return res.status(403).json({message:"All Fields are Required"})

    const {data,error} = await supabase.from('userr').insert([{name,email,password,role}]).select();
    if(error){
        return res.json({error:error.message});
    }

    return res.json({message:"SignUp SuccessFull",data})
}