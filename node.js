const form = document.querySelector("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const dob = document.getElementById("date-of-birth");
const genderRadios = document.getElementsByName("gender");
const department = document.getElementById("department");
const skills = document.getElementsByName("skills");
const address = document.getElementById("address");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const picture = document.getElementById("picture");

form.addEventListener("submit", function(event){
    event.preventDefault();

    if(fullName.value.trim() === ""){
        alert("Please enter your full name!");
        fullName.focus();
        return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if(email.value.trim() === "" || !emailPattern.test(email.value)){
        alert("Please enter a valid email!");
        email.focus();
        return;
    }

    if(phone.value.trim() === ""){
        alert("Please enter your phone number!");
        phone.focus();
        return;
    }

    if(dob.value === ""){
        alert("Please select your date of birth!");
        dob.focus();
        return;
    }

    let genderSelected = false;
    for(let i = 0; i < genderRadios.length; i++){
        if(genderRadios[i].checked){
            genderSelected = true;
            break;
        }
    }
    if(!genderSelected){
        alert("Please select your gender!");
        return;
    }

    if(department.value === "Select Department..."){
        alert("Please select your department!");
        department.focus();
        return;
    }

    let skillSelected = false;
    for(let i = 0; i < skills.length; i++){
        if(skills[i].checked){
            skillSelected = true;
            break;
        }
    }
    if(!skillSelected){
        alert("Please select at least one skill!");
        return;
    }

    if(address.value.trim() === ""){
        alert("Please enter your address!");
        address.focus();
        return;
    }

    if(picture.files.length === 0){
        alert("Please upload your profile picture!");
        picture.focus();
        return;
    }

    if(password.value === "" || confirmPassword.value === ""){
        alert("Please enter your password and confirm it!");
        password.focus();
        return;
    }

    if(password.value !== confirmPassword.value){
        alert("Passwords do not match!");
        password.focus();
        return;
    }

    alert("Registration Successful!");
    form.reset();
});
