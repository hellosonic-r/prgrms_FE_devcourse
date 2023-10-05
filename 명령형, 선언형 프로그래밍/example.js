/* 명령형 프로그래밍 */
function double(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i] * 2);
    }
    return results;
}
console.log(double([1,2,3]));


/* 선언형 프로그래밍 */
function double2(arr2) {
    return arr2.map(number => number*2);
}
console.log(double2([1,2,3]));

function double3(arr3) {
    return arr3.filter(param => typeof param === 'number').map(number => number * 2);
}

console.log(double3([1,2,3,4]));
