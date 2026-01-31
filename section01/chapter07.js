// 1. 대입 연산자
let var1 = 1; //변수에 값 저장

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10; 

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
++num8; //라인 전에 1추가 (전위 연산)
num8++; //라인 끝나고 1추가 (후위 연산)

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자
let comp1 = 1 === "1"; //동등비교(왜 3개냐? -> 값의 자료형까지 같은지 비교하기 위해서 )
let comp2 = 1 !== 2; //비동등비교

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;