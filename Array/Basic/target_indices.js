//Leetcode : 2089

function targetIndices(nums, target)
{
     nums.sort((a, b) => a - b)

    let ans = []
    for(let i = 0; i< nums.length; i++)
    {
        if(nums[i] === target)
        {
            ans.push(i)
        }
    }
    return ans
}
console.log(targetIndices([1,2,5,2,3], 2))             //[1, 2]
console.log(targetIndices([1,2,5,2,3], 3))             //[3]                       //Time Complexity : O(Nlogn + N)