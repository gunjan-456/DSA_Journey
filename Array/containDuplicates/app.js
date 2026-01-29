//Leetcode : 217

function Duplicates(nums){
    const set = new Set()
    for(let item of nums)
    {
        if(set.has(item))
        {
            return true
        }
        set.add(item)
        
    }
    return false
}
console.log(Duplicates([1, 2, 3, 4]))  //false           Time Complexity : O(n)






//Another method 

function Duplicates(nums){
    for(let i = 0; i < nums.length; i++)
    {
        for(let j = i+1; j < nums.length; j++)
        {
            if(nums[i] == nums[j])
            {
                return true
            }
        }
    }
    return false
}
console.log(Duplicates([1, 2, 3, 2, 2, 4, 1]))  //true           Time Complexity : O(n*2)