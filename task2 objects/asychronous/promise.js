const myProm=new Promise((resolve, reject) =>{
setTimeout(()=>{
    resolve("result")
},2000)

})
.then(result => console.log(result))
.catch((error)=> console.log(error))