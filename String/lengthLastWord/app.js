function lengthOfLastWord(str){


    let i = str.length - 1
    let count = 0
    while (i >= 0 && str[i] !== ' ')
    {
        count++
        i--
    }
    return count

}
console.log(lengthOfLastWord("fly me to the moon"))      //4        //Time Complexity: O(n)