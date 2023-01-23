function validateRegisterForm() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let language = document.getElementById('language');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    const button = document.getElementById("mentor_reg_btn");
    button.addEventListener("click", validateRegisterForm);
    if (validateFname(fname) & validateLname(lname)) {
        window.location.href = "mentor_meet.html";
        return true;
    }
    else {
        window.scrollTo(0, 0);
        return false;
    }
}

function validateFname(fname) {
    let val = fname.value;
    let check = true;
    if (val === '') {
        if (!fname.classList.contains("bad_input")) {
            fname.classList.add("bad_input");
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode("First name must not be empty!");
            newDiv.appendChild(newContent);
            newDiv.classList.add("bad_input_message")
            fname.after(newDiv);
        }
        check = false;
    }
    else {
        for (let i = 0; i < fname.length; i++){
            if(!(fname.charCodeAt(i) > 64 && fname.charCodeAt(i) < 91)){
                check = false;
            }
        }
        /* for (let i = 0; i < val.length; i++) {
            console.log(val.charCodeAt(i));
        }
        alert(`You have inputted: ${val}`); */
    }
    return check;
}

function validateLname(lname) {
    let val = lname.value;
    let check = true;
    if (val === '') {
        if (!lname.classList.contains("bad_input")) {
            lname.classList.add("bad_input");
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode("Last name must not be empty!");
            newDiv.appendChild(newContent);
            newDiv.classList.add("bad_input_message")
            lname.after(newDiv);
        }
        check = false;
    }
    else {
        for (let i = 0; i < val.length; i++) {
            let charval = val.charCodeAt(i); 
            if(charval<65 || (charval>90 && charval<97) || charval>122){
                check = false;
                break;
            }
        }
        alert(`You have inputted: ${val}`);
    }
    return check;
}