//Leetcode : 2108


function firstPalindrome(words)
{
    for(let item of words)
    {
        let si = 0
        let ei = item.length - 1
        let isPalindrome = true

        while(si < ei)
        {
            if(item[si] !== item[ei])
            {
                isPalindrome = false
                break
            }
            si++
            ei--
        }
        if(isPalindrome) return item
    }
    return ""
}
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))       //ada
console.log(firstPalindrome(["notapalindrome","racecar"]))         //racecar
console.log(firstPalindrome(["def","ghi"]))                  //""                     //Time Complexity : O(N * M)
                                                                                     //Space Complexity : O(1)