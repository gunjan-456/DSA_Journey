//Leetcode : 744

function nextGreaterLetter(letters, target)
{
    let si = 0
    let ei = letters.length - 1

    while(si <= ei)
    {
        let mid = Math.floor((si + ei) / 2)

        if(letters[mid] > target)
        {
            ei = mid - 1
        }
        else{
            si = mid + 1
        }
    }
    return letters[si % letters.length]
}
console.log(nextGreaterLetter(["c","f","j"], "a"))             //c
console.log(nextGreaterLetter(["c","f","j"], "c"))             //f
console.log(nextGreaterLetter(["x","x","y", "y"], "z"))        //x                       Time Complexity : O(log n)
                                                                                        //Space Complexity : O(1)