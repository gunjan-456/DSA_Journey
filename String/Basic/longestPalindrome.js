//Leetcode : 409


function longestPalindrome(s){
    let map = {}
    let length = 0
    let hasOdd = false

    for(let char of s)
    {
        map[char] = (map[char] || 0) + 1
    }

    for(let key in map)
    {
        let count = map[key]

        length += Math.floor(count / 2) * 2

        if(count % 2 === 1)
        {
            hasOdd = true
        }
    }
    if(hasOdd)
    {
        length += 1
    }
    return length

}
console.log(longestPalindrome("abccccdd"))            //7
console.log(longestPalindrome("abcaa"))               //3                          Time Complexity : O(n)
                                                                                 //Space Complexity : O(1)