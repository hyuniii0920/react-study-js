// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA(); // 함수 자체가 콘솔에 출력됨 (그냥 함수를 담아놓을 수도 있음 문자열 처럼 사용 가능)

let varB = function () {
  //   console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));


//let varB = function () { // 익명함수
//  console.log("funcB");
//}