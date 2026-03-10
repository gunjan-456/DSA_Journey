//Leetcode : 1748

function sumOfUnique(nums)
{
    let freq = {}

    for(let num of nums)
    {
        freq[num] = (freq[num] || 0) + 1
    }

    let sum = 0
    for(let item in freq)
    {
        if(freq[item] === 1)
        {
            sum += Number(item)
        }
    }
    return sum
}

console.log(sumOfUnique([1, 2, 3, 2]))          //4
console.log(sumOfUnique([1, 1, 1, 1, 1]))       //0
console.log(sumOfUnique([1, 2, 3, 4, 5]))       //15                            Time Complexity : O(n)
                                                                               //Space Complexity : O(n)