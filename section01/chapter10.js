for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 건너뛰고 계속해서 실행된다.
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
