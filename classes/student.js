class Student {
    constructor(firstName, lastName, grade, tardies, scores) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
        this.scores = [];
    }

    increaseGrade() {
        this.grade += 1;
    }

    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "You are expelled!";
        }
        return "Tardies: ", this.tardies;
    }

    addScore(score) {
        this.scores.push(score);
    }

    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) {
            return a + b;
        });
        return sum / this.scores.length;
    }
}

let firstStudent = new Student("Colt", "Steele", 11);
firstStudent.addScore(88);
firstStudent.addScore(98);
console.log(firstStudent.calculateAverage());

// console.log(
//     `${firstStudent.firstName} ${firstStudent.lastName} is in grade: ${firstStudent.grade}`
// );
// firstStudent.increaseGrade();
// console.log(
//     `${firstStudent.firstName} ${firstStudent.lastName} is in grade: ${firstStudent.grade}`
// );
