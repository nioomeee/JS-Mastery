function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    return ans;
}

console.log(one());
console.log(two());
console.log(three());