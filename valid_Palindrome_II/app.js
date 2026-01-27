var validPalindrome = function(s) {

    function isPalindrome(si, ei)
    {
        while(si < ei)
        {
            if(s[si] !== s[ei])
            {
                return false
            }
            si++
            ei--
        }
        return true
    }
    
    let si = 0
    let ei = s.length - 1

    while(si < ei)
    {
        if(s[si] == s[ei])
        {
            si++
            ei--
        }
        else{
            return isPalindrome(si+1, ei) || isPalindrome(si, ei-1)
        }
    }

    return true
}

console.log(validPalindrome( "abca"))       //true
console.log(validPalindrome( "aba"))        //true
console.log(validPalindrome( "abc"))        //false                                         //Time Complexity : O(n)