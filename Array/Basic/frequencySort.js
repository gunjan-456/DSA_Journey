//Leetcode : 1636

function frequencySort(nums){
    let freq = {}

    for(let num of nums)
    {
        freq[num] = (freq[num] || 0) + 1
    }

    nums.sort((a, b) => {
        if(freq[a] != freq[b])
        {
            return freq[a] - freq[b]
        }
        else{
            return b - a
        }
    })
    return nums
}
console.log(frequencySort([1,1,2,2,2,3]))
console.log(frequencySort([2,3,1,3,2]))
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]))                   //Time Complexity : O(nlogn)
                                                                    //Space Complexity : O(n)