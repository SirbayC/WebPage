function validateRegisterForm() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let language = document.getElementById('language');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    let sexsekect = document.getElementById('sex');

    if (validateFname(fname) & validateLname(lname) & validateSex(sexsekect)) {
        window.location.href = "mentor_meet.html";
        return true;
    }
    else {
        window.scrollTo(0, 0);
        return false;
    }
}

function validateFname(fname) {
    if (fname.classList.contains("bad_input")) {
        fname.classList.remove("bad_input");
        const element = document.getElementById("error_text_fname");
        element.remove();
    }
    let val = fname.value;
    let check = true;
    if (val === '') {
        fname.classList.add("bad_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "error_text_fname");
        const newContent = document.createTextNode("First name must not be empty!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("bad_input_message")
        fname.after(newDiv);
        check = false;
    }
    else {
        for (let i = 0; i < val.length; i++) {
            if (!((val.charCodeAt(i) > 64 && val.charCodeAt(i) < 91) || (val.charCodeAt(i) > 96 && val.charCodeAt(i) < 123))) {
                check = false;
                fname.classList.add("bad_input");
                const newDiv = document.createElement("div");
                newDiv.setAttribute("id", "error_text_fname");
                const newContent = document.createTextNode("First name must contain only letters!");
                newDiv.appendChild(newContent);
                newDiv.classList.add("bad_input_message")
                fname.after(newDiv);
                break;
            }
        }
    }
    return check;
}

function validateLname(lname) {
    let val = lname.value;
    let check = true;
    if (lname.classList.contains("bad_input")) {
        lname.classList.remove("bad_input");
        const element = document.getElementById("error_text_lname");
        element.remove();
    }
    if (val === '') {
        lname.classList.add("bad_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "error_text_lname");
        const newContent = document.createTextNode("Last name must not be empty!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("bad_input_message")
        lname.after(newDiv);
        check = false;
    }
    else {
        for (let i = 0; i < val.length; i++) {
            let charval = val.charCodeAt(i);
            if (charval < 65 || (charval > 90 && charval < 97) || charval > 122) {
                check = false;
                lname.classList.add("bad_input");
                const newDiv = document.createElement("div");
                newDiv.setAttribute("id", "error_text_lname");
                const newContent = document.createTextNode("Last name must contain only letters!");
                newDiv.appendChild(newContent);
                newDiv.classList.add("bad_input_message")
                lname.after(newDiv);
                break;
            }
        }

    }
    return check;
}


function validateSex(sexsekect) {
    let val = sexsekect.value;
    let check = true;
    if (sexsekect.classList.contains("bad_input")) {
        sexsekect.classList.remove("bad_input");
        const element = document.getElementById("error_text_sexsekect");
        element.remove();
    }
    if (val === 'def') {
        sexsekect.classList.add("bad_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "error_text_sexsekect");
        const newContent = document.createTextNode("Choose an option!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("bad_input_message")
        sexsekect.after(newDiv);
        check = false;
    }
    else {
        sexsekect.style.color = '#131310';
    }
    return check;
}