function validateRegisterForm() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let language = document.getElementById('language');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    let sexsekect = document.getElementById('sex');

    if (validateFname(fname) & validateLname(lname) & validateLanguage(language) & validateEmail(email) & validateSex(sexsekect)) {
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
    if (fname.classList.contains("good_input")) {
        fname.classList.remove("good_input");
        const element = document.getElementById("good_text_fname");
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
    if (check === true) {
        fname.classList.add("good_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "good_text_fname");
        const newContent = document.createTextNode("Looks good!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("good_input_message")
        fname.after(newDiv);
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

function validateLanguage(language) {
    let val = language.value;
    let check = true;
    if (language.classList.contains("bad_input")) {
        language.classList.remove("bad_input");
        const element = document.getElementById("error_text_language");
        element.remove();
    }
    if (val === '') {
        language.classList.add("bad_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "error_text_language");
        const newContent = document.createTextNode("Language must not be empty!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("bad_input_message")
        language.after(newDiv);
        check = false;
    }
    return check;
}

function validateEmail(email) {
    let val = email.value;
    let check = true;
    if (email.classList.contains("bad_input")) {
        email.classList.remove("bad_input");
        const element = document.getElementById("error_text_email");
        element.remove();
    }
    if (val === '') {
        if (!email.classList.contains("bad_input")) {
            email.classList.add("bad_input");
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", "error_text_email");
            const newContent = document.createTextNode("Email must not be empty!");
            newDiv.appendChild(newContent);
            newDiv.classList.add("bad_input_message")
            email.after(newDiv);
        }
        check = false;
    }
    else {
        let partone = false;
        let parttwo = false;
        let partthr = false;
        let point = false;
        let arond = false;
        for (let i = 0; i < val.length; i++) {
            if (val.charCodeAt(i) === 64)
                arond = true;
            if (val.charCodeAt(i) === 46 && arond === true)
                point = true;
            if (point === false && arond === false)
                partone = true;
            if (point === false && arond === true)
                parttwo = true;
            if (point === true && arond === true)
                partthr = true
        }
        if (!(partone && arond && parttwo && point && partthr)) {
            check = false;
            email.classList.add("bad_input");
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", "error_text_email");
            const newContent = document.createTextNode("Email not valid!");
            newDiv.appendChild(newContent);
            newDiv.classList.add("bad_input_message")
            email.after(newDiv);
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
    return check;
}