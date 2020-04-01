var express= require('express');
var parser=require('body-parser');
var apps=express();
apps.use(parser.urlencoded({extended:false}));

// apps.get('/',(req,res)=>{
//     res.json({"status":"hello"});
//     });

    apps.get('/',(req,res)=>{
        var fx=80;
        var fy=40;
        var fz=50;
if(fx>fy){
    if(fx>fz){
        res.json({"res":fx + "is largest"});
    }
    else{
        res.json({"res":fz + "is largest"});
    }
    
}
else{
    if(fy>fz){
        res.json({"res":fy + "is largest"});
    }
    else{
        res.json({"res":fz + "is largest"});
    }
}
})
apps.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
});
