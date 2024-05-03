function showAlert() {
    alert("Hello! You clicked the button.");
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all fields.");
        return false;
    }

    return true;
}
