//es모듈 시스템
import mul, { add, sub } from "./math.js"; // 합쳐서 사용 가능 

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));



//common 모듈 시스템  (es모듈이랑 같이 못 씀)
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// const {add,sub} = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));