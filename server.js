const mongoose=require("mongoose")
const dotenv = require("dotenv")


dotenv.config({path:'./config.env'})

console.log("betetetetet",process.env.DATABASE); 

const app =require('./app')

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

// Set strictQuery to true or false to suppress the warning
mongoose.set('strictQuery', false);  

mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology: true,

}).then(con =>{
  console.log(con.connections);
  console.log('DB connection successful');
  
  
})

// console.log(app.get("env"));
// console.log("env",process.env);
const PORT =  process.env.PORT ||  3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

