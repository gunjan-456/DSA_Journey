//Leetcode : 561

function arrayPartition(nums)
{
    nums.sort((a, b) => a - b)

    let sum = 0

    for(let i = 0; i <  nums.length; i+=2)
    {
        let a = nums[i]
        let b = nums[i+1]
        sum += Math.min(a, b)

    }
    return sum

}
console.log(arrayPartition([1, 4, 3, 2]))           //4
console.log(arrayPartition([6,2,6,5,1,2]))          //9             Time Complexity : O(Nlogn)
                                                                   //Space Complexity : O(n)