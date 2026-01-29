var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) return intersect(nums2, nums1)

    const freq = new Map()
    for (const x of nums1) {
        freq.set(x, (freq.get(x) || 0) + 1)
    }

    const res = []
    for (const x of nums2) {
        const count = freq.get(x) || 0
        if (count > 0) {
            res.push(x)
            if (count === 1) freq.delete(x)
            else freq.set(x, count - 1)
        }
    }
    return res
    
}
console.log(intersect([4,9,5], [9,4,9,8,4]))    //[9, 4]      //Time Complexity : O(n + m)