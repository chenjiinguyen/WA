/**
 * 
 * @param {*} a 
 */
function secondMax(a){
    let max = a[0]
    for (let i = 1; i < a.length; i+=1) {
        if(a[i] > max)
            max = a[i]
    }
    let secondMax = a[0]
    let index = 0
    for (let i = 1; i < a.length; i+=1) {
        if(a[i] > secondMax && a[i] < max)
        {
            secondMax = a[i]
            index = i
        }
    }
    return index+1
    

}
let a = [3,4,11,8,2,5,6,7,10,9,1]
console.log(secondMax(a))