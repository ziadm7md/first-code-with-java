let students = [
{ name: "Ziad", score: 95 },
{ name: "Mohammed", score: 75 },
{ name: "Ali", score: 50 }
];

function checkpass(score) {
if (score >= 60) {
    return "Pass";
} else {
    return "Fail";
}
}

for (let i = 0; i < students.length; i++) {
let student = students[i];
let grade;

if (student.score >= 90) {
    grade = "A";
} else if (student.score >= 80) {
    grade = "B";
} else if (student.score >= 70) {
    grade = "C";
} else if (student.score >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

let result = checkpass(student.score);

console.log("Student: " + student.name +" | Score: " + student.score + " | Grade: " + grade + " | "+ result);
}


//============ Print with another way  ============
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let grade;
    let result = checkpass(student.score);
    console.log(`Student: ${student.name} | Score: ${student.score} | Grade: ${grade} | ${result}`);
}

