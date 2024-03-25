// function main() {
    let input = prompt("Enter the student's marks 0-100;");
    let mark = parseFloat(input);

    if(!isNaN(mark) && mark >=0 && mark <= 100) {
        let grade = studentgrade(mark);
        alert("the student grade is " + grade);
    }
    else {
        alert(" invalid input! please enter a number between 0 and 100");
    }
// }



 function studentgrade(marks) {
if (marks >79){
    return 'A'
     
}

else if (marks  >=60 && marks <=79){ 
    return 'B'
}

else if (marks >=50 && marks <=59){
    return 'C'
}

else if (marks >=40 && marks <=49){
    return 'D'
}

else if (marks <40){
    return 'E'
}
 }