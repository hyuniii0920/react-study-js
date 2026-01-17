//number type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // 연산 실패 값

//string type
let myName = "조서현";
let myLocation = "부산"
let intro = myName + myLocation;


// * 템플릿 리터럴 문법 *
let introText =  `${myName}은 ${myLocation}에 거주합니다` // 백틱 (영어로 하면 나옴)
console.log(introText);

//Boolean type
let isSwitchOn = true;
let isEmpty = false;

//null type (아무것도 없다)
let empty = null;


//undefined type (존재하지 않는 어떤 값을 가져오려할 때 null은 그냥 아예 없는거)
let none;
console.log(none);