function twoArrays(k, A, B) {

  const sortedA = [...A].sort((a, b) => a - b);
  const reverseA = [...A].sort((a, b) => b - a);
  const sortedB = [...B].sort((a, b) => a - b);
  const reverseB = [...B].sort((a, b) => b - a);
  const satisfyCondition1 = ["yes"];
  const satisfyCondition2 = ["yes"];
  const satisfyCondition3 = ["yes"];

  for (let i = 0; i < A.length; i++) {
    const sum1 = A[i] + B[i];

    sum1 < k && satisfyCondition1.push("no");
  }

  for (let i = 0; i < A.length; i++) {
    const sum2 = sortedA[i] + reverseB[i];

    sum2 < k && satisfyCondition2.push("no");
  }

  for (let i = 0; i < A.length; i++) {
    const sum3 = reverseA[i] + sortedB[i];

    sum3 < k && satisfyCondition3.push("no");
  }

  const isNo1 = satisfyCondition1.find((e) => e === "no");
  const isNo2 = satisfyCondition2.find((e) => e === "no");
  const isNo3 = satisfyCondition2.find((e) => e === "no");

  return isNo1 && isNo2 && isNo3 ? "NO" : "YES";
}

