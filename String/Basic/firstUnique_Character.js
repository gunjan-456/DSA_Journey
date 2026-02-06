//Leetcode : 387



function firstUniqueChar(s){
    
    let freq = {}

    for(let ch of s)
    {
        freq[ch] = (freq[ch] || 0) + 1
    }

    for(let i = 0; i < s.length; i++)
    {
        if(freq[s[i]] == 1)
        {
            return i
        }
    }
    return -1
}
console.log(firstUniqueChar("leetcode"))      //0
console.log(firstUniqueChar("loveleetcode"))   //2
console.log(firstUniqueChar("aabbccdd"))       //-1                 //Time complexity : O(n)
                                                                    //Space complexity :O(1)