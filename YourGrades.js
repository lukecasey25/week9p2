var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


function YourGrades() {
    let myArray = [];
    var subjects = parseInt(document.getElementById("subjects").value);
    var averageGrade = 0;
    var sum = 0;
    var letterGrade;



    for (let i = 0; i < subjects; i++) {
        var grades = parseFloat(prompt("Enter your grades for subject " + (i + 1)));
        myArray.push(grades);
    }

    alert("Your Grades are " + myArray);


    //compute 

    for (i = 0; i < myArray.length; i++) {
        sum += myArray[i]

    }

    averageGrade = sum / subjects;

    alert("Average grade = " + averageGrade);

    hide();

    //print sum Letter grade

    if (averageGrade > 90)
        letterGrade = "A";
    else if (averageGrade >= 80 && averageGrade <= 89) {
        letterGrade = "B";

    }
    else if (averageGrade >= 70 && averageGrade <= 79) {
        letterGrade = "B";

    }
    else if (averageGrade >= 60 && averageGrade <= 69) {
        letterGrade = "C";

    }
    else if (averageGrade >= 50 && averageGrade <= 59) {
        letterGrade = "D";

    }
    else if (averageGrade >= 40 && averageGrade <= 49) {
        letterGrade = "E";

    }
    else {

        letterGrade = "F";
    }

    document.getElementById("here").innerHTML += letterGrade;

}

function hide() {
    document.getElementById("myForm").style.display = "none";
}
