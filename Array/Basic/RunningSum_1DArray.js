//Question : 1480


function runningSum(nums)
{
    let sum = 0
    let ans =[]
    for(let i = 0; i < nums.length; i++)
    {
        sum += nums[i]
        ans.push(sum)
    }
    return ans
}

console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([3,1,2,10,1]))
console.log(runningSum([1, 1, 1, 1]))                 //Time complexity : O(n)
                                                    //Space complexity : O(n)