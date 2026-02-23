//Leetcode : 1385



function findTheDistanceValue(arr1, arr2, d) {
    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
        let isValid = true;

        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            count++;
        }
    }

    return count;
}

console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2))     //2
console.log(findTheDistanceValue([1,4,2,3], [-4,-3,6,10,20,30], 3))         //2             Time Complexity : O(n*m)
                                                                                        //Space Complexity : O(1)