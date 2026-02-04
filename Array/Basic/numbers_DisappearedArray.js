//Leetcode : 448


// function findDisappearedNumbers(nums)
// {
//     let set = new Set(nums)
//     let ans =[]
//     for(let i = 1; i <= nums.length; i++)
//     {
//         if(!set.has(i))
//         {
//             ans.push(i)
//         }
//     }
//     return ans
// }
// console.log(findDisappearedNumbers([1, 2, 3, 4, 7, 8]))        //[5, 6]    //Here, Time complexity : O(n)
                                                                               //Space complexity : O(n)





function findDisappearedNumbers(nums) {


  let n = nums.length
  for (let i = 0; i < n; i++) {
    let val = nums[i];
    let idx = (val - 1) % n
    nums[idx] += n;
  }

  let ans = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) ans.push(i + 1);
  }

  return ans;
}
console.log(findDisappearedNumbers([1, 2, 3, 4, 7, 8]))
