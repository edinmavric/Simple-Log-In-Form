let password = document.getElementById('pname');
let confirmPassword = document.getElementById('cpname');
let email = document.getElementById('ename');

const validateForm = () => {

    console.log('email', email.value)
    console.log('password', password.value)
    console.log('c password', confirmPassword)
    
    if (email.value == "") {
        alert('Email must be entered!');
        return false;
    }
    if (password.value.length < 8) {
        alert('Password must be atleast 8 characters long!');
        return false;
    }
    if (password.value == confirmPassword.value) {
       prompt("Succesfull login!", "Enter your username");
       return true;
   }
    if (password.value != confirmPassword.value) {
        alert("Password doesn't match");
        return false;
    }

}

//ime prezime, email, potvrdi email, sifru i potvrdi sifru