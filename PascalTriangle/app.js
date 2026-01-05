//first type of Problem:

function Triangle(row, col) {
    row = row - 1
    col = col - 1

    let ans = 1
    for (let i = 0; i < col; i++) {
        ans = ans * (row - i) / (i + 1)
    }
    return ans
}

console.log(Triangle(5, 3))  //6



//Second type of Problem: Leetcode 119

     function TriangleRow(n){
        let ans = 1
        let row = [1]
        
        for(let i = 1; i <= n; i++)
        {
            ans = ans*(n-i+1) / i
            row.push(ans)
           
        }
        console.log(row)

      }
      TriangleRow(6)   //[1, 6, 15, 20, 15, 6, 1]