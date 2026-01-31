// 함수
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅 : 밑바닥에 작성된것도 최 상단으로 끌어 올려서 실행해줌. 따라서 함수 선언이 곡 상단에 있지 않아도 됨.
// -> 끌어올리다 라는 뜻 
function getArea(width, height) { // 매개변수 -> 변수 이름만 적어주면 됨 (const 같은거 안써도 됨)
  function another() { 
    // 중첩 함수 : 함수 내부에 또다른 함수를 만들 수 있음.
    console.log("another");
  }

  another();
  let area = width * height;

  return area; //반환값(함수호출의 결과값)
}

//함수선언

function greeting() {
  console.log("안녕하세요!");
}

greeting(); // 꼭 소괄호와 함께 선언 해주어야 된다.

console.log("호출전");
greeting(); // 함수로 넘어가서 출력
console.log("호출후");