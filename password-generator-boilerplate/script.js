/** Select required elements in DOM */

const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const resultEl = document.getElementById('result');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//console.log(randomFunc[type])


//Add functionality to copy password on clipboard
clipboardEl.addEventListener('click', ()=>{
    const password = resultEl.innerText;

    if(!password){
        return "" //empty return
    }

    navigator.clipboard.writeText(password);
     alert("Password copied to clipboard")

})


generateEl.addEventListener('click', () => {
    
    //console.log("test",randomFunc[lower])
    console.log("Added")
    const length = lengthEl.value 
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked 
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked 
    
    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)

})

//Add functionality to generate password
function generatePassword(lower, upper, number, symbol, length) {
    console.log("check",lower, upper, number, symbol,length)
     let generatePassword = ''
     const typesCount = lower + upper + number + symbol
     console.log("typesCount",typesCount,[{lower},{upper},{number},{symbol}])
     
     const typesArray = [{lower},{upper},{number},{symbol}].filter(item =>Object.values(item)[0])
     console.log("typesArray",typesArray)

     if(typesCount === 0){
        return ""
     }

     for(let i =0;i<length; i+=typesCount){
        typesArray.forEach(type =>{
            const functionName = Object.keys(type)[0]
            generatePassword += randomFunc[functionName]()
        })

     }

     const finalPassword = generatePassword.slice(0,length)//1,2,3,4,5
     return finalPassword
     
}

//Generate random lower case alphabets 
function getRandomLower() {
console.log("lower",String.fromCharCode(Math.floor(Math.random()*26)+97))
   return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

//Generate random upper case alphabets 
function getRandomUpper() {
console.log("upper",String.fromCharCode(Math.floor(Math.random()*26)+65))
   return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

//Generate random numbers
function getRandomNumber() {
    console.log("number",String.fromCharCode(Math.floor(Math.random()*10)+48))

    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

//Generate random symbol
function getRandomSymbol() {
    const symbols ='!@#$%^&*(){}[]+=<>?/,.'
    console.log("symbols",symbols[Math.floor(Math.random()*symbols.length)])
    return symbols[Math.floor(Math.random()*symbols.length)]
  
}
