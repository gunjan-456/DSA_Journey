//Leetcode : 747

function dominantIndex(nums){
    let max = -1
    let index = -1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            index = i
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i !== index && max < 2 * nums[i]) {
            return -1
        }
    }

    return index

    
}

console.log(dominantIndex([3, 6, 1, 0]))                //1