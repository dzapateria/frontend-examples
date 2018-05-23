function add(x: number, y: number): number {
    return x + y;
}

let Add = function myAdd(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x, y) {
    return x + y;
};

let capsuleAdd = Add;

console.log(add(5, 7));
console.log(myAdd(5, 32));
console.log(capsuleAdd(6, 3))