//Leetcode : 463


function islandPerimeter(grid){

    let land = 0
    let shared = 0

    for(let i = 0; i < grid.length; i++)
    {
        for(let j = 0; j < grid[0].length; j++)
        {
            if(grid[i][j] === 1)
            {
                land++
                if(i < grid.length - 1 && grid[i+1][j] === 1)
                shared++

                 if (j < grid[0].length - 1 && grid[i][j + 1] === 1)
                shared++
                
            }
        }
    }

    return land * 4 - shared * 2
    
}
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))           //16