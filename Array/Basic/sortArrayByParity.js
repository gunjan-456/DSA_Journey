//Leetcode : 905


function sortArrayByParity(nums)
{
    let i = 0
    for(let j = 0; j < nums.length; j++)
    {
        if(nums[j] % 2 === 0)
        {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
    return nums
}
console.log(sortArrayByParity([3,1,2,4]))
console.log(sortArrayByParity([3,1,2,4,6,8,9]))                 //Time Complexity : O(n)
                                                                //Space Complexity : O(1)