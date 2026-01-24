function missingNumber(nums)
{
    let n = nums.length


    let expectedSum = (n * (n + 1)) / 2
    let actualSum = 0

    for(let i = 0; i < nums.length; i++)
    {
        actualSum += nums[i]
    }
    return expectedSum - actualSum
}
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))        //8        //Time Complexity : O(n)