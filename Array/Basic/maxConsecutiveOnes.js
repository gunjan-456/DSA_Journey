//Leetcode : 485


function maxConsecutiveOnes(nums){
    let count = 0
    let maxCount = 0
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] === 1)
        {
            count++
            maxCount = Math.max(maxCount, count)

        }
        else{
            count = 0
        }
    }
    return maxCount

}
console.log(maxConsecutiveOnes([1,1,0,1,1,1]))       //3
console.log(maxConsecutiveOnes([1,0,1,1,0,1]))       //2                      Time Complexity : O(n)
                                                                              //Space Complexity : O(1)