function singleNumber(nums){
    let ans = 0
     for(let i = 0; i < nums.length; i++)
     {
        let count = 0

        for(let item of nums)
        {
            if((item >> i) & 1)
            {
                count++
            }
        }
        if(count % 3 !== 0)
        {
            ans |= (1 << i)
        }
     }
     return ans
}
console.log(singleNumber([0,1,0,1,0,1,99]))          //99         //Time Complexity : O(n)