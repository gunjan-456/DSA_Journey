//Question : 1295



function findNumbers(nums){
    let count = 0
    for(let i = 0; i < nums.length; i++)
    {
        if (nums[i].toString().length % 2 === 0) {
            count++
        }
    }
    return count
}
console.log(findNumbers([12,345,2,6,7896]))  //2
console.log(findNumbers([555,901,482,1771]))  //1

//Time complexity :O(n)
//Space complexity : O(1)










