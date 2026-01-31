import { supabase } from "../Config/Supabase.config.js";

export const createTrip = async(req,res)=>{
  const{customer_id,vehicle_id,start_date,end_date,location,distance_km,passengers}=req.body;
  if(!customer_id||!vehicle_id||!start_date||!end_date|| !location ||!distance_km||!passengers) return res.status(403).json({message:"All Fields are Required"})

   const {data1,error1} = await supabase.from('vehicle').select().eq("id",vehicle_id).single();
    console.log(data1);
    const {data,error} = await supabase.from('trip').insert([{customer_id,vehicle_id,start_date,end_date,location,distance_km,passengers}]).select();
    if(error){
        return res.json({error:error.message});
    }

    return res.json({message:"Trip Added SuccessFully",data})
}

export const getTrip = async(req,res)=>{
    const{tripId} = req.params;
    if(!tripId) return res.json({message:"Id is required"})

    const {data,error} = await supabase.from('trip').select().eq("id",tripId).single();

    if(error){
        return res.json({error:error.message});
    }

    return res.json({message:"Vehicle By Id",data})
}

export const deleteTrip = async(req,res)=>{
    const {tripId} = req.params;

     if(!tripId) return res.json({message:"Id is required"})

    const {data,error} = await supabase.from('trip').delete().eq("id",tripId);

    if(error){
        return res.json({error:error.message});
    }

    return res.json({message:"Trip Completed"})
}