// function PrimeNumber(n){
//     for(let i = 2; i < n; i++)
//     {
//         if(n % i === 0)
//         {
//             return false
//         }
//     }
//     return true

   
// }
// for(let i = 2; i <= 10; i++)
// {
//     if(PrimeNumber(i))
//     {
//         console.log(i)
//     }
// }



function countPrime(n){
    let count = 0
    for(let i = 2; i < n; i++)
    {
        if(isPrime(i))
        {
            count++
        }

    }
    return count
}

function isPrime(number){
    if(number <= 1) return;


    for(let i = 2; i * i <= number; i++)
    {
        if(number % i == 0)
        {
            return false
        }
    }
    return true
}

console.log(countPrime(10))     //4                //Time Complexity : O(n * sqrt n)