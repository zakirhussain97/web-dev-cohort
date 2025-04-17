// 90 >= A
// 80 >= B
// 70 >= C
// 60 >= D
// F

function gradeCale(score) {
    if (score >= 90) {
        return "A";
    }
    if (score >= 80) {
        return "B";
    }
    if (score >= 70) {
        return "C";
    }
    if (score >= 60) {
        return "D";
    }
    return "F";

}

let grade = gradeCale(95); // A
console.log(grade); // A