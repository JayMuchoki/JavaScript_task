function checkpalindrom(str){

   let strarr=[]

   for(let i=0;i<str.length;i++)
{
    strarr.push(str[i])

    
}  
// return  reveresd array
let reversedarr=[]
for(let y =strarr.length-1; y>=0;y--){
    reversedarr.push(strarr[y])
}

// concat the array to string
  let joinreversestring=''
  reversedarr.map((elem) =>{
    joinreversestring=joinreversestring.concat(elem)
  })

  if(str===joinreversestring){
    return `${str } is palindron`
  }else{
    return `${str} is not palindron `
  }

 
}
let palindrom='pig'
let lowerpalidrom=palindrom.toLocaleLowerCase()
console.log(checkpalindrom(lowerpalidrom))