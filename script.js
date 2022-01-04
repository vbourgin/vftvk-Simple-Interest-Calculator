function compute()
{
    // Get the values entered by the user
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Compute interest and year from user values
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);



    // Update result HTML accordingly
    document.getElementById("result").innerHTML = `
    <br>
    If you deposit <mark>${principal}</mark><br>
    at an interest rate of <mark>${rate}%</mark><br>
    You will receive an amount of <mark>${interest}</mark><br>
    in the year <mark>${year}</mark>
    <br>`;
}

// function validateForm(){
//     let principal_element = document.getElementById("principal");
//     if (principal_element.value <= 0) {
//       alert("Enter a positive number");
//       principal_element.focus();
//       return false;
//     }
// }

function updateRate(){
    // Update the rate value according to the slider bar value
    var rateval = document.getElementById("principal").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}