//Leetcode : 1122

function relativeSortArray(arr1, arr2){
    let freq = {}
    let ans = []

    for(let item of arr1)
    {
        freq[item] = (freq[item] || 0) + 1
    }

    for(let item of arr2)
    {
        while(freq[item] > 0)
        {
            ans.push(item)
            freq[item]--
        }
        delete freq[item]
    }

    let remaining = []
    for(let key in freq)
    {
        while(freq[key] > 0)
        {
            remaining.push(Number(key))
            freq[key]--
        }
    }
    remaining.sort((a, b) => a - b)
    return ans.concat(remaining)

}
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))            
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]))                      //Time Complexity : (N+M+KlogK)