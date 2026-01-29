function findWords(words){
    let row1 = new Set("qwertyuiop")
    let row2 = new Set("asdfghjkl")
    let row3 = new Set("zxcvbnm")

    let rows = [row1, row2, row3]
    let ans = []

    for(let item of words)
    {
        let w = item.toLowerCase()

        let chosenRows;

        for(let r of rows)
        {
            if(r.has(w[0]))
            {
                chosenRows = r
                break
            }
        }

        let ok = true
        for(let ch of w)
        {
            if(!chosenRows.has(ch))
            {
                ok = false
                break;
            }
        }
        if(ok)
        {
            ans.push(item)
        }
    }
    return ans

}
console.log(findWords(["Hello","Alaska","Dad","Peace"]))