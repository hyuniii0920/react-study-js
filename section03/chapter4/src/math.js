// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) { //math 모듈의 기본(대표) 계산식 으로 설정
  return a * b;
}


// module.exports = {
//   add,
//   sub,
// };


// "type": "module" 이렇게 추가 하면 es 모듈로 작동됨