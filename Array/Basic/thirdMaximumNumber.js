//Leetcode : 414


function thirdMax(nums)
{
    let first = null
    let second = null
    let third = null

    for(let item of nums)
    {
        if(item === first || item === second || item === third)
        {
            continue
        }

        if(item === first || item > first)
        {
            third = second
            second = first
            first = item
        }
        else if(item === second || item > second)
        {
            third = second
            second = first

        }
        else if(item === third || item > third)
        {
            third = item
        }
    }

    return third === null ? first : third

}
console.log(thirdMax([3, 2, 1]))     //1
console.log(thirdMax([2, 2, 3, 1]))    //1          //Time complexity : O(n)
                                                    //Space complexity : O(1)