//Leetcode : 575


function distributeCandies(candyType){

    candyType.sort((a, b) => a - b)

    let uniqueTypes = 1

    for(let i = 1; i < candyType.length; i++)
    {
        if(candyType[i] !== candyType[i+1])
        {
            uniqueTypes++
        }
    }
    return Math.min(uniqueTypes, candyType.length / 2)
}

console.log(distributeCandies([1,1,2,2,3,3]))           //3
console.log(distributeCandies([1,1,2,3]))               //2
console.log(distributeCandies([6,6,6,6]))               //2                       Time Complexity : O(nlogn)
                                                                                //Space Complexity : O(1)











