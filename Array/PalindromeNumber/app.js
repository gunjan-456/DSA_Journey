var isPalindrome = function(x) {

    if (x < 0) return false

    let str = x.toString()

    let si = 0
    let ei = str.length - 1

    while (si < ei) {
        if (str[si] !== str[ei]) {
            return false
        }
        si++
        ei--
    }

    return true
}
console.log(isPalindrome(121))       //true         //Time Complexity: O(n)
