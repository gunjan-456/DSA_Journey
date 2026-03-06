//Leetcode : 415

function addStrings(num1, num2)
{
    let i = num1.length - 1
    let j = num2.length - 1
    let carry = 0
    let ans = ""

    while(i >= 0 || j >= 0 || carry)
    {
        let digit1 = i >= 0 ? num1[i] - '0' : 0
        let digit2 = j>= 0 ? num2[j] - '0' : 0

        let sum = digit1 + digit2 + carry

        ans = (sum % 10) + ans
        carry = Math.floor(sum / 10)

       i--
       j--
        

        
    
        
    }
    return ans
    
}
console.log(addStrings("11", "123"))            //134
console.log(addStrings("456", "77"))            //533                
