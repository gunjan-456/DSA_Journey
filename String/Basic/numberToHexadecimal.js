//Leetcode : 405


function toHex(num)
{
    if(num === 0) return "0"
    let hexChars = "0123456789abcdef"
    let ans = ""

    for(let i = 0; i < 8 && num !== 0; i++)
    {
        let digit = num & 15
        ans = hexChars[digit] + ans
        num >>>= 4

    }
    return ans

}
console.log(toHex(26))       //1a
console.log(toHex(-1))       //ffffffff                             Time Complexity : O(1)
                                                                  //Space Complexity : O(1)