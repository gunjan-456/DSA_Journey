//Leetcode : 2114


function mostWordsFound(sentences){
    let max = 0

    for(let i = 0; i < sentences.length; i++)
    {
        let wordCount = sentences[i].split(" ").length
        max = Math.max(max, wordCount)
    }
    return max
}

console.log(mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much"                   //6
]))

console.log(mostWordsFound([
    "please wait",
    "continue to fight",
    "continue to win"                                    //3
]))                                                       //Time Complexity : O(N*M)