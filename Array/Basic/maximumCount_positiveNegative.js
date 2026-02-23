//Leetcode : 2529

function maximumCount(nums)
{
    let positiveCount = 0
    let negativeCount = 0

    for(let item of nums)
    {
        if(item < 0)
        {
            negativeCount++
        }
        if(item > 0)
        {
            positiveCount++
        }
    }
    return Math.max(positiveCount, negativeCount)
    
}
console.log(maximumCount([-2,-1,-1,1,2,3]))                //3
console.log(maximumCount([-3,-2,-1,0,0,1,2]))              //3
console.log(maximumCount([5,20,66,1314]))                  //4                      //Time Complexity : O(n)
                                                                                   //Space Complexity : O(1)