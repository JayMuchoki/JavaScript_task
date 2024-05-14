let randomnumber = Math.floor(Math.random()*10+1)
let number=prompt('Guess a number between 1 and 10')

if(number > 10 || Number < 1){
    console.log( 'enter a number between 1 and 10')
}else if(number===randomnumber){
    console.log('Goodwork')
}else{
    console.log('Does not match')
}
