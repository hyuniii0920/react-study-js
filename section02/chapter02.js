// function returnFalse() {
//   console,log("False 함수");
//   return false;
// }

// function returnTrue() {
//   console,log("True 함수");
//   return true;
// }

// console.log(returnFalse() && returnTrue); //결과값이 false이기 때문에 무슨 값을 넣어도 false로 반환
// console.log(returnTrue() && returnFalse); //*작동을 안함*: 앞에서 트루기 때문에 뒷 값에 따라서 달라질 수 있기 때문
// console.log(returnTrue() || returnFalse); //앞에서 트루니까 이미 트루를 반환하면 되는거임


// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
