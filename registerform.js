let register = document.getElementById("register");
let form = document.getElementById("registrationForm");
let errorMessages = document.querySelectorAll(".error-message");
let signIn = document.getElementById("signin");


register.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = validateForm();
    if (isValid) {
        saveUserData();
        alert("Register successful");
        document.write(`<html>
<head>
<title>Page Title</title>
</head>
<style>
    .register{
        color: green;
        
    }
    #acNumber{
        color: blue;
    }

    #account{
        color: white;
        background-color: blue;
    }
    
</style>
<body>
    <div class='center'>
        <h1 class="register">Registeration successful</h1>
        <p>Your Acknowledgement Number is:<span id="acNumber"></span></p>
        <div id="container">
            <button id="account">Account Creation</button>
        </div>
    </div>
    <script>
        let acNumber = document.getElementById("acNumber");
        let x = Math.floor((Math.random() * 10000000000));
        acNumber.innerHTML = x;
        document.getElementById("account").addEventListener('click',()=>{
            window.open('home.html','_self')
        })

        


        
    </script>
</body>

</html>
        `);
        form.reset();
    }
});

document.createElement("button")
function validateForm() {
    let isValid = true;
    errorMessages.forEach(function(element) {
        element.textContent = ""; // Clear previous error messages
    });


    if (document.getElementById("ssid").value === "") {
        document.getElementById("ssidErrorMsg").textContent = "SSID is required";
        isValid = false;
    }
    if (document.getElementById("fname").value === "") {
        document.getElementById("fnameErrorMsg").textContent = "First name is required";
        isValid = false;
    }
    if (document.getElementById("lname").value === "") {
        document.getElementById("lnameErrorMsg").textContent = "Last name is required";
        isValid = false;
    }
    if (document.getElementById("number").value === "") {
        document.getElementById("numberErrorMsg").textContent = "Contact number is required";
        isValid = false;
    }
    if (document.getElementById("email").value === "") {
        document.getElementById("emailErrorMsg").textContent = "Email is required";
        isValid = false;
    }
    if (document.getElementById("psw").value === "") {
        document.getElementById("pswErrorMsg").textContent = "Password is required";
        isValid = false;
    }
    if (document.getElementById("psw-repeat").value === "") {
        document.getElementById("pswRepeatErrorMsg").textContent = "Please confirm your password";
        isValid = false;
    }

    return isValid;
}

function saveUserData() {
    let customerSSID = document.getElementById("ssid").value;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let pswd = document.getElementById("psw").value;
    let repeatPswd = document.getElementById("psw-repeat").value;

    let user = {
        customerSSID,
        firstName,
        lastName,
        number,
        email,
        pswd,
        repeatPswd
    };

    let userJSON = JSON.stringify(user);
    localStorage.setItem(customerSSID, userJSON);
}
signIn.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('login.html', '_blank');
    


})
