function duplicateZeros(arr){
    let zeros = 0
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === 0)
        {
            zeros++
        }
    }

    let i = arr.length - 1
    let j = arr.length - 1 + zeros

    while(i >= 0){
        if(j < arr.length)
        {
            arr[j] = arr[i]
        }


        if(arr[i] === 0)        //if it is zero then we have to write twice
        {
            j--
            if(j < arr.length) arr[j] = 0

        }
        i--
        j--
    }
}
let ans = [1,0,2,3,0,4,5,0]
duplicateZeros(ans)
console.log(ans)            //[1, 0, 0, 2, 3, 0, 0, 4]        //Time Complexity : O(n)