function reverseString(s){

    //Two pointer approach

    let si = 0
    let ei = s.length - 1

    while(si < ei)
    {
        let temp = s[si]
        s[si] = s[ei]
        s[ei] = temp

        si++
        ei--
    }
    return s

}

console.log(reverseString(["h","e","l","l","o"]))       //Time Complexity : O(n)