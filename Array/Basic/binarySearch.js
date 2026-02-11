//Leetcode : 704

// function Search(nums, target)
// {
//     for(let i = 0; i < nums.length; i++)
//     {
//         if(nums[i] == target)
//         {
//             return i
//         }
//     }
//     return -1
// }
// console.log(Search([-1,0,3,5,9,12], 9))
// console.log(Search([-1,0,3,5,9,12], 2))                          //Time Complexity : O(n)
                                                                   //Spce Complexity : O(1)


//Binary Search
function Search(nums, target)
{
    let left = 0
    let right = nums.length - 1

    while(left <= right)
    {
        let mid = Math.floor((left + right) / 2)

        if(nums[mid] == target)
        {
            return mid
        }
        else if(nums[mid] < target)
        {
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return -1
}
console.log(Search([-1,0,3,5,9,12], 9))         //4
 console.log(Search([-1,0,3,5,9,12], 2))        //-1                      //Time Complexity : O(log n)
                                                                          //Space Complexity : O(1)