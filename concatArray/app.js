var getConcatenation = function(nums) {
    let ans = []

    for (let i = 0; i < nums.length; i++)
    {
        ans.push(nums[i])
    }

    for(let i = 0; i < nums.length; i++)
    {
        ans.push(nums[i])
    }
    console.log(ans)
}

getConcatenation([1, 2, 1])   //[1, 2, 1, 1, 2, 1]     //Time Complexity : O(n)