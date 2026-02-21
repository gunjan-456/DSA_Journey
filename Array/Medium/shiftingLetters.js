//Leetcode : 848

function shiftingLetters(s, shifts){
    let n = s.length
    let totalShift = 0
    let ans = s.split('')

    for(let i = n -1; i >= 0; i--)
    {
        totalShift = (totalShift + shifts[i]) % 26

        let charCode = ans[i].charCodeAt(0) - 97
        charCode = (charCode + totalShift) % 26

        ans[i] = String.fromCharCode(charCode + 97)
    }
    return ans.join('')
}
console.log(shiftingLetters("abc", [3,5,9]))             //rpl
console.log(shiftingLetters("aaa", [1,2,3]))             //gfd                    Time Complexity : O(n)
                                                                                 //Space Complexity : O(n)