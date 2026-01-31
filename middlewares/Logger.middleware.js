import fs from "fs"

export async function log(req,res,next){
    const url= req.url;
    const method = req.method;
    const timestamp = req.timestamp;
    fs.writeFileSync("log.txt",JSON.stringify({url,method,timestamp},'\n'));
    next()
}