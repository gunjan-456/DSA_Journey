//Leetcode : 28


function firstOccurrence(haystack, needle)
{
    if(needle.length === 0) return 0


    let m = haystack.length
    let n = needle.length

    for(let i = 0; i <= m - n; i++)
    {
        let j = 0
        while(j < n && haystack[i+j] === needle[j])
        {
            j++
        }
        if(j === n)
        {
            return i
        }
    }
    return -1

}
console.log(firstOccurrence("sadbutsad", "sad"))          //0
console.log(firstOccurrence("leetcode", "leeto"))         //-1                  //Time Complexity : O(m * n)
                                                                                //Space Complexity : O(1)