function sortedArrays(nums){
    let ans = []
    for(let i = 0; i < nums.length; i++)
    {
        ans.push(nums[i] ** 2)
    }
    ans.sort((a, b) => a - b)
    return ans

}

console.log(sortedArrays([-4,-1,0,3,10]))        //[0, 1, 9, 16, 100]      //Time Complexity : O(nlogn)
