function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });



//  **커맨드 슬래쉬 하면 전부 주석처리 됨
//  //promise 의 체이닝
//   // then 매서드
//   //-> 그 후에
//   promise.then((value) => {
//     console.log(value);
//   })

//   // catch 매서드
//   promise.catch((error) => {
//     console.log(error);
//   })