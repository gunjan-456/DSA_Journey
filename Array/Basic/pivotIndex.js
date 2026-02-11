//Leetcode : 724

function pivotIndex(nums)
{

    let totalSum = 0
    for(let x of nums)
    {
        totalSum += x
    }

    let leftSum = 0
    for(let i = 0; i < nums.length; i++)
    {
        let rightSum = totalSum  - leftSum - nums[i]

        if(leftSum === rightSum)
        {
            return i
        }
        leftSum += nums[i]
    }
    return -1

}
console.log(pivotIndex([1,7,3,6,5,6]))        //3
console.log(pivotIndex([1,2,3]))              //-1
console.log(pivotIndex([2,1,-1]))            //0                       //Time Complexity : O(n)
                                                                       //Space Complexity : O(1)