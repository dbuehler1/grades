$(document).ready(function () {
    $("#gradeForm").submit(enterGrade);
    $("#Display").click(displayStudents);

    var entries = [];
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
        entries.push(entry)

    }

    function displayStudents(){
        for(var x = 0; x < entries.length; x++){
            var newFName  = $("<p>");
            $("#test").append(newFName);
            newFName.attr("id", 'Fname${x}');
            newFName.text("First Name: " + entries[x].FN);

            var newLName  = $("<p>");
            $("#test").append(newLName);
            newLName.attr("id", 'Lname${x}');
            newLName.text("Last Name: " + entries[x].LN);

            var newAVG  = $("<p>");
            $("#test").append(newAVG);
            newAVG.attr("id", 'avg${x}');
            newAVG.text("Grade Average: " + (entries[x].PTSE / entries[x].PTSP * 100).toFixed(2) + "%");

            var avg = (entries[x].PTSE / entries[x].PTSP * 100).toFixed(2);

            var newGrade  = $("<p>");
            if(avg >= 90){
                $("#test").append(newGrade);
                newGrade.attr("id", 'Grade${x}');
                newGrade.text("Grade: A");
            }
            else if(avg >= 80){

                $("#test").append(newGrade);
                newGrade.attr("id", 'Grade${x}');
                newGrade.text("Grade: B");
            }
            else if(avg >= 70){
                $("#test").append(newGrade);
                newGrade.attr("id", 'Grade${x}');
                newGrade.text("Grade: C");
            }
            else if(avg >= 60){
                $("#test").append(newGrade);
                newGrade.attr("id", 'Grade${x}');
                newGrade.text("Grade: D");
            }
            else{
                $("#test").append(newGrade);
                newGrade.attr("id", 'Grade${x}');
                newGrade.text("Grade: F");
            }

        }

    }

})
