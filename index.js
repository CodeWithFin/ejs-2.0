import express from "express";
const app = express();
const port = 3000;
const d = new Date();
const day = d.getDay();
var motivationalQuote = ""

if (day > 0 && day < 6){
    motivationalQuote = "Hey, It is A WeekDay , It is Time to Work Hard!!";
}
else{
    motivationalQuote = "Hey, It is A WeekDay , It is Time to Have Fun";
}
app.get("/",(req,res)=>{
res.render("index.ejs",
    {motivationalQuote}
);
});

app.listen(port,()=>{
    console.log(`Server is Listening on port ${port}`);
});








// console.log(day);

