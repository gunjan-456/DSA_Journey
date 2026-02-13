//Leetcode : 389

function findDifference(s, t)
{
    let x = 0
    for(let ch of s)
    {
        x ^= ch.charCodeAt(0)
    }
    for(let ch of t)
    {
        x ^= ch.charCodeAt(0)
    }
    return String.fromCharCode(x)

}
console.log(findDifference("abcd", "abcde"))      //e
console.log(findDifference("abcd", "abcdf"))      //f
console.log(findDifference(" ", "y"))             //y                    Time Complexity : O(n)
                                                                         //Space Complexity : O(1)