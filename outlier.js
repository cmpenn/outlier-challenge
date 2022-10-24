let evenArr = [2, 4, 0, 100, 4, 11, 2602, 36] 
let oddArr = [160, 3, 1719, 19, 11, 13, -21]

function outlier(arr){
let even = []
let odd = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] %2 != 0){
            odd.push(arr[i])
        }else if(arr[i] %2 === 0){
            even.push(arr[i])
        }
    }
    if(even.length > odd.length){
        return odd
    }else{
        return even
    }
}

console.log(outlier(oddArr))