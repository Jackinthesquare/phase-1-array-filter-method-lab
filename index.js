// Code your solution here
// const findMatching = (arr, str) => {
//     const uppercased = arr.map(arr => arr.toUpperCase());
//     return uppercased.filter(el => el === str.toUpperCase());
// }

function findMatching(arr,str){
    return arr.filter(element => element.toUpperCase() === str.toUpperCase())
}

function fuzzyMatch(arr,str){
    return arr.filter(element => element[0].toUpperCase() === str[0].toUpperCase())
}

function matchName(arr,str){
    return arr.filter(element => element.home === str)
    console.log(str)
}