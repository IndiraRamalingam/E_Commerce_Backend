const config=require('./utils/config');
const mongoose=require('mongoose');
const app=require('./app');
// const fs=require('fs')
// 
// 
// const Freelancers = require('./models/Freelancer')
// 
// console.log("connecting to MongoDB")
// 
// const data = JSON.parse(fs.readFileSync('./freelancer.json', 'utf-8'))
// 
// console.log(data)

// import data to MongoDB
// const importData = async () => {
//     try {
//       await Freelancers.create(data)
//       console.log('data successfully imported')
//       // to exit the process
//       process.exit()
//     } catch (error) {
//       console.log('error', error)
//     }
//   }
// 
//   importData();

//connect with DB
mongoose.connect(config.MONGO_URI)
    .then(()=>{
        console.log("Connected to MongoDB");
        app.listen(config.PORT,() =>{
            console.log(`Server running on PORT ${config.PORT}`);
        });
    })
    .catch((error)=>{
        console.log('Error connecting to MongoDB', error);
    });