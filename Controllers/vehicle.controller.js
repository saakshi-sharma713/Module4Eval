import { supabase } from "../Config/Supabase.config.js";

export const addVehicle = async(req,res)=>{
  const{name,registration_number,allowed_passengers,rate_per_km,owner_id}=req.body;
  if(!name||!registration_number||!allowed_passengers||!rate_per_km || !owner_id) return res.status(403).json({message:"All Fields are Required"})

    const {data,error} = await supabase.from('vehicle').insert([{name,registration_number,allowed_passengers,rate_per_km,owner_id}]).select();
    if(error){
        return res.json({error:error.message});
    }

    return res.json({message:"Vehicle Added SuccessFully",data})
}


export const getVehicle = async(req,res)=>{
    const{vehicleId} = req.params;
    if(!vehicleId) return res.json({message:"Id is required"})

    const {data,error} = await supabase.from('vehicle').select().eq("id",vehicleId).single();

    if(error){
        return res.json({error:error.message});
    }

    return res.json({message:"Vehicle By Id",data})
}

export const assignDriver = async(req,res)=>{
     const{vehicleId} = req.params;
     const {driver_id} = req.body;
    if(!vehicleId) return res.json({message:"Id is required"})

    const {data,error} = await supabase.from('vehicle').select("id").eq("id",vehicleId).single();

    if(!data){
        return res.json({message:"Vehicle not exists"});
    }
  
    const {data1,error1} = await supabase.from('vehicle').update({driver_id}).eq("id",vehicleId).select();
    
     if(error1){
        return res.json({error:error.message});
    }

    return res.json({message:"Driver Added",data1})

}