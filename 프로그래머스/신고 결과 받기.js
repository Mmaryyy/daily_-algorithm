function solution(id_list, report, k) {
  // 남은 횟수를 신고당한 횟수로 업데이트
  // 리턴 값은 유저 별로 유저가 신고한 이용자가 정지당했을 경우 발송하는 이메일을 받을지를 리턴
  // 신고 정보를 순회하며 유저별 '신고당한 횟수'를 기록하는 객체 생성
  // 리포트를 신고한 유저별로 필터링하고 같은 대상을 신고한 경우(중복 처리)

  const reportedUser = {};
  for (let user of id_list) {
    const result = new Set();
    report.filter((el) => {
      const [reporter, reported] = el.split(" ");
      if (user === reporter) {
        result.add(reported);
      }
      return result;
    });
    for (let reported of result) {
      reportedUser[reported] = (reportedUser[reported] || 0) + 1;
    }
  }
  console.log(reportedUser);
  const reportedId = Object.keys(reportedUser).filter(
    (el) => reportedUser[el] >= k
  );
  const result = [];
  return result;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
