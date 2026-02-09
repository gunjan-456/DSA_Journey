//Leetcode : 628

function maximumProduct(nums)
{
    nums.sort((a, b) => a - b)

    let n = nums.length

    let case1 = nums[n-1] * nums[n-2] * nums[n-3]
    let case2 = nums[0] * nums[1] * nums[n-1]

    return Math.max(case1, case2)
}
console.log(maximumProduct([1, 2, 3]))          //6
console.log(maximumProduct([1, 2, 3, 4]))       //24
console.log(maximumProduct([1, 2, 3, 4, 5]))    //60                        Time Complexity : O(n logn)
                                                                            //Space Complexity : O(1)