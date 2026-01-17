function validPalindrome(str){
    if(str < 0) return false

    let strr = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    let si = 0
    let ei = strr.length - 1

    while(si < ei)
    {
        if(strr[si] !== strr[ei])
        {
            console.log(`${str} is not a Palindrome`)
            return false
        }
        si++
        ei--
    }
    console.log(`${str} is a Palindrome`)
    return true
    
        
   

}
validPalindrome("A man, a plan, a canal: Panama")           //Time Complexity : O(n)