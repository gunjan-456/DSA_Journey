function Occurrence(haystack, needle) {
    if (needle.length === 0) return 0

    let n = haystack.length
    let m = needle.length

    for (let i = 0; i <= n - m; i++) {
        let j = 0

        while (j < m && haystack[i + j] === needle[j]) {
            j++
        }

        if (j === m) {
            return i;
        }
    }

    return -1;
}

console.log(Occurrence("sadbutsad", "sad"))  // 0
console.log(Occurrence("leetcode", "leeto")) // -1           //Time Complexity : O(n * m)
