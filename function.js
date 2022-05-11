function gpaCell (markes) {
    let gpa;

    if (markes >= 0 && markes <= 32) {
        gpa = 0
    }else if (markes >= 33 && markes <= 39) {
        gpa = 1
    }else if (markes >= 40 && markes <= 49) {
        gpa = 2
    }else if (markes >= 50 && markes <= 59) {
        gpa = 3
    }else if (markes >= 60 && markes <= 69) {
        gpa = 3.5
    }else if (markes >= 70 && markes <= 79) {
        gpa = 4
    }else if (markes >= 80 && markes <= 100) {
        gpa = 5
    }

    return gpa;
};

function gradeCell (markes) {
    let grade;

    if (markes >= 0 && markes <= 32) {
        grade = 'F'
    }else if (markes >= 33 && markes <= 39) {
        grade = 'D'
    }else if (markes >= 40 && markes <= 49) {
        grade = 'C'
    }else if (markes >= 50 && markes <= 59) {
        grade = 'B'
    }else if (markes >= 60 && markes <= 69) {
        grade = 'A-'
    }else if (markes >= 70 && markes <= 79) {
        gpgradea = 'A'
    }else if (markes >= 80 && markes <= 100) {
        grade = 'A+'
    }

    return grade;
};


