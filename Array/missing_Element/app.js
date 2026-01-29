function missingElement(nums){
    let minVal = nums[0]
    let maxVal = nums[0]


    for(let items of nums)
    {
        if(items < minVal)
        {
            minVal = items
        }


        if(items > minVal)
        {
            maxVal = items

        }

        
    }
    const set = new Set(nums)
    
    const missing = []
    for(let i = minVal; i <= maxVal; i++)
    {
        if(!set.has(i))
        {
            missing.push(i)
        }
    }
    return missing

}
console.log(missingElement([1,4,2,5]))
console.log(missingElement([5,1]))