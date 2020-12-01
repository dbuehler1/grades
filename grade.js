$(document).ready(function () {
    $("#gradeForm").submit(enterGrade);

    function enterGrade() {
        event.preventDefault();
        var firstName = $("#FirstName").val();
        var lastName = $("#LastName").val();
        var pointsEarned = $("#ptsEarned").val();
        var pointsPossible = $("#ptsPossible").val();

        var entry = {
            FN: firstName,
            LN: lastName,
            PTSE: pointsEarned,
            PTSP: pointsPossible
        };

        $("#FName").text("First Name: " + entry.FN);
        $("#LName").text("Last Name: " + entry.LN);
        $("#AVG").text("Grade Average: " + (entry.PTSE / entry.PTSP * 100) + "%");

        var avg = entry.PTSE / entry.PTSP * 100
        if(avg >= 90){
            $("#LetterGrade").text("Grade: A");
        }
        else if(avg >= 80){
            $("#LetterGrade").text("Grade: B");
        }
        else if(avg >= 70){
            $("#LetterGrade").text("Grade: C");
        }
        else if(avg >= 60){
            $("#LetterGrade").text("Grade: D");
        }
        else{
            $("#LetterGrade").text("Grade: F");
        }
    }


})
