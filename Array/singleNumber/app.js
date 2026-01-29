function singleNumber(nums){
    let ans = 0
    for(let i = 0; i < nums.length; i++)
    {
        ans = ans ^ nums[i]
    }
    return ans
       
}
console.log(singleNumber([4,1,2,1,2]))      //4        //Time Complexity : O(n)
                                                       //Space Complexity : O(1)


//Dry Run: 
// [4,1,2,1,2]

// 0 ^ 4 = 4
// 4 ^ 1 = 5
// 5 ^ 2 = 7
// 7 ^ 1 = 6
// 6 ^ 2 = 4         



// I used the XOR approach. Since XOR approach of same number is zero and XOR with zero gives the number itself.
//All duplicate number cancel out, and the remaining value is the single number and that thing only we have to find.