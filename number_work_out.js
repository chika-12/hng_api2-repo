const axios = require("axios")
const url = "http://numbersapi.com/";


async function factGen(number){
    const response = await axios.get(`${url}${number}/math`)
    return response.data
}

function isPrime(num){
    for(let index = 2; index < num; index++){
        if (num % index === 0){
            return false
        }
    }
    return true
}

function isPerfect(num){
    let sum = 0;
    for(let index = 1; index <= num / 2; index++){
        if(num % index === 0){
            sum += index
        }
    }
    //console.log(typeof(num))
    return sum == num
}
function prop(num){
    let arr = []
    let sum = 0
    for(let index = 0; index < num.length; index++){
        sum += parseInt(num[index]) ** num.length
    }
    if (sum === parseInt(num)){
        arr.push("armstrong")
    }
    if(parseInt(num) % 2 === 0){
        arr.push("even")
    }else{
        arr.push("odd")
    }
    return arr
}

function digit_sum(num){
    let val = parseInt(num)
    let sum = 0
    if(val <= 9){
        return num
    }else{
        for(let index = 0; index < num.length; index++){
            sum += parseInt(num[index])
        }
    }
    return sum
}


async function numberWork(number){
    const fact = await factGen(number)
    const prime = isPrime(number)
    const perfect = isPerfect(number)
    const properties = prop(number)
    const summation  = digit_sum(number)

    const values = {
    number: parseInt(number),
    is_prime: prime,
    is_perfect: perfect,
    properties: properties,
    digit_sum: summation,
    fun_fact: fact
    }

    return values
}

module.exports = numberWork