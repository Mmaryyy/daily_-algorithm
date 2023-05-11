function studentReports(students) {
  // TODO: 여기에 코드를 작성합니다.
  let female = students.filter((el) => {
    return el.gender === "female";
  });
  return female.map((el) => {
    el.grades = el.grades.reduce((acc, cur) => acc + cur, 0) / el.grades.length;
    return el;
  });
}

console.log(
  studentReports([
    {
      name: "Anna",
      gender: "female",
      grades: [4.5, 3.5, 4],
    },
    {
      name: "Dennis",
      gender: "male",
      country: "Germany",
      grades: [5, 1.5, 4],
    },
    {
      name: "Martha",
      gender: "female",
      grades: [5, 4, 4, 3],
    },
    {
      name: "Brock",
      gender: "male",
      grades: [4, 3, 2],
    },
  ])
);
