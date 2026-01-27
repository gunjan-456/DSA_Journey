function containDuplicates(nums, k)
{
    const lastSeen = new Map()

    for(let i = 0; i < nums.length; i++)
    {
        const val = nums[i]

        if(lastSeen.has(val))
        {
            const prev = lastSeen.get(val)

            if(i - prev <= k)
            {
                return true
            }
        }
        lastSeen.set(val, i)

    }
    return false
}

console.log(containDuplicates([1, 2, 3, 1], 3))   //true
console.log(containDuplicates([1, 2, 3, 1, 2, 3], 3))     //true                                 //Time Complexity : O(n)