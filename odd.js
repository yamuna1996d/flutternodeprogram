var ex=require('express');
var parse=require('body-parser');
var host=ex();
host.use(parse.urlencoded({extended:false}));
host.post('/odd',(req,res)=>{
    var n=req.body.numbe;
    var i;
    for (i = 1; i <= n; i++) {
        if (i % 2 != 0) {
        res.json({"res":i+"odd numbers"});
    }
 }
})
host.listen(3000,()=>{
    console.log("server started");
});

















// let n=200;
// let i;
// for (i = 1; i <= n; i++) {
//     if (i % 2 != 0) {
//      console.log(i+"odd numbers")
//     }
//  }