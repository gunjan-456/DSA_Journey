//Leetcode : 345


function reverseVowels(s){
    let vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'])
    let arr = s.split("")

    let si = 0
    let ei = arr.length - 1

    while(si < ei)
    {
        if(!vowels.has(arr[si]))
        {
            si++
        }
        else if(!vowels.has(arr[ei]))
        {
            ei--
        }
        else{
            let temp = arr[si]
            arr[si] = arr[ei]
            arr[ei] = temp
            si++
            ei--
        }
    }
    return arr.join("")

}
console.log(reverseVowels("IceCreAm"))
console.log(reverseVowels("leetcode"))