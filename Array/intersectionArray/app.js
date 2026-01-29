var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)     
    let ansSet = new Set()   

    for (let num of nums2) {
        if (set1.has(num)) {
            ansSet.add(num)
        }
    }

    return Array.from(ansSet)

    
}
console.log(intersection([1, 2, 2, 1], [2, 2]))  //2     //Time complexity : O(n+m)