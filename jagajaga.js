function validateRegisterForm() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let language = document.getElementById('language');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    let sexsekect = document.getElementById('sex');

    if (validateFname(fname) & validateLname(lname) & validateLanguage(language) & validateUsername(username) & validateEmail(email) & validateSex(sexsekect) & validatePassword(password, password2)) {
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
    if (lname.classList.contains("good_input")) {
        lname.classList.remove("good_input");
        const element = document.getElementById("good_text_lname");
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
    if (check === true) {
        lname.classList.add("good_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "good_text_lname");
        const newContent = document.createTextNode("Looks good!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("good_input_message")
        lname.after(newDiv);
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
    if (language.classList.contains("good_input")) {
        language.classList.remove("good_input");
        const element = document.getElementById("good_text_language");
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
    if (check === true) {
        language.classList.add("good_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "good_text_language");
        const newContent = document.createTextNode("Looks good!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("good_input_message")
        language.after(newDiv);
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
    if (email.classList.contains("good_input")) {
        email.classList.remove("good_input");
        const element = document.getElementById("good_text_email");
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
        if (!(partone && arond && parttwo && point && partthr && val.length>4)) {
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
    if (check === true) {
        email.classList.add("good_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "good_text_email");
        const newContent = document.createTextNode("Looks good!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("good_input_message")
        email.after(newDiv);
    }
    return check;
}

function validateUsername(username) {
    let val = username.value;
    let check = true;
    if (username.classList.contains("bad_input")) {
        username.classList.remove("bad_input");
        const element = document.getElementById("error_text_username");
        element.remove();
    }
    if (username.classList.contains("good_input")) {
        username.classList.remove("good_input");
        const element = document.getElementById("good_text_username");
        element.remove();
    }
    if (val === '') {
        username.classList.add("bad_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "error_text_username");
        const newContent = document.createTextNode("Username must not be empty!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("bad_input_message")
        username.after(newDiv);
        check = false;
    }
    else {
        if (val.length < 4 || val.length > 12)
            check = false;
        if (val.charCodeAt(0) < 65 || val.charCodeAt(0) > 90)
            check = false;
        if ((val.charCodeAt(val.length - 1) > 64 && val.charCodeAt(val.length - 1) < 91) || (val.charCodeAt(val.length - 1) > 96 && val.charCodeAt(val.length - 1) < 123))
            check = false;
        if (check === false) {
            username.classList.add("bad_input");
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", "error_text_username");
            const newContent = document.createTextNode("Username must start with a capital letter and end with a number or special character!");
            newDiv.appendChild(newContent);
            newDiv.classList.add("bad_input_message")
            username.after(newDiv);
            check = false;
        }
    }
    if (check === true) {
        username.classList.add("good_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "good_text_username");
        const newContent = document.createTextNode("Looks good!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("good_input_message")
        username.after(newDiv);
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
    if (sexsekect.classList.contains("good_input")) {
        sexsekect.classList.remove("good_input");
        const element = document.getElementById("good_text_sexsekect");
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
    if (check === true) {
        sexsekect.classList.add("good_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "good_text_sexsekect");
        const newContent = document.createTextNode("Looks good!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("good_input_message")
        sexsekect.after(newDiv);
    }
    return check;
}

function validatePassword(password, password2) {
    let val = password.value;
    let val2 = password2.value;
    let matchy = false;
    let check = true;
    if (password.classList.contains("bad_input")) {
        password.classList.remove("bad_input");
        const element = document.getElementById("error_text_password");
        element.remove();
    }
    if (password.classList.contains("good_input")) {
        password.classList.remove("good_input");
        const element = document.getElementById("good_text_password");
        element.remove();
    }
    if (password2.classList.contains("bad_input")) {
        password2.classList.remove("bad_input");
        const element = document.getElementById("error_text_password2");
        element.remove();
    }
    if (password2.classList.contains("good_input")) {
        password2.classList.remove("good_input");
        const element = document.getElementById("good_text_password2");
        element.remove();
    }
    if (val === '') {
        password.classList.add("bad_input");
        password2.classList.add("bad_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "error_text_password");
        const newContent = document.createTextNode("Password must not be empty!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("bad_input_message")
        password.after(newDiv);
        check = false;
    }
    else {
        let uppercase = false;
        let lowercase = false;
        let number = false;
        let symbol = false;
        if (val === val2) {
            matchy = true;
            for (let i = 0; i < val.length; i++) {
                if (val.charCodeAt(i) > 64 && val.charCodeAt(i) < 91)
                    uppercase = true;
                else if (val.charCodeAt(i) > 96 && val.charCodeAt(i) < 123)
                    lowercase = true;
                else if (val.charCodeAt(i) > 47 && val.charCodeAt(i) < 58)
                    number = true;
                else
                    symbol = true;
            }
            if (val.length < 12) {
                password.classList.add("bad_input");
                const newDiv = document.createElement("div");
                newDiv.setAttribute("id", "error_text_password");
                const newContent = document.createTextNode("Password must be at least 12 characters long!");
                newDiv.appendChild(newContent);
                newDiv.classList.add("bad_input_message")
                password.after(newDiv);
                password2.classList.add("bad_input");
                check = false;
            }
            else {
                if (uppercase && lowercase && number && symbol) {
                    if (val.length > 11 && val.length < 14) {
                        password.classList.add("ok_input");
                        password2.classList.add("ok_input");
                        const newDiv = document.createElement("div");
                        newDiv.setAttribute("id", "error_text_password");
                        const newContent = document.createTextNode("A password of 14 characters or more is recommanded!");
                        newDiv.appendChild(newContent);
                        newDiv.classList.add("ok_input_message")
                        password.after(newDiv);
                        check = true;
                    }
                    else {
                        password.classList.add("good_input");
                        const newDiv = document.createElement("div");
                        newDiv.setAttribute("id", "error_text_password");
                        const newContent = document.createTextNode("Looks good!");
                        newDiv.appendChild(newContent);
                        newDiv.classList.add("good_input_message")
                        password.after(newDiv);
                        password2.classList.add("good_input");
                        check = true;
                    }
                }
                else {
                    password.classList.add("bad_input");
                    password2.classList.add("bad_input");
                    const newDiv = document.createElement("div");
                    newDiv.setAttribute("id", "error_text_password");
                    const newContent = document.createTextNode("Password requires a combination of uppercase letters, lowercase letters, numbers, and symbols!");
                    newDiv.appendChild(newContent);
                    newDiv.classList.add("bad_input_message")
                    password.after(newDiv);
                    check = false;
                }

            }
        }
        else {
            password.classList.add("bad_input");
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", "error_text_password");
            const newContent = document.createTextNode("Passwords don't match!");
            newDiv.appendChild(newContent);
            newDiv.classList.add("bad_input_message")
            password.after(newDiv);
            password2.classList.add("bad_input");
            check = false;
        }
    }
    return check;
}

function validateCountry(country) {
    if (country.classList.contains("bad_input")) {
        country.classList.remove("bad_input");
        const element = document.getElementById("error_text_country");
        element.remove();
    }
    if (country.classList.contains("good_input")) {
        country.classList.remove("good_input");
        const element = document.getElementById("good_text_country");
        element.remove();
    }
    let val = country.value;
    let check = true;
    if (val === '') {
        country.classList.add("bad_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "error_text_country");
        const newContent = document.createTextNode("Country must not be empty!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("bad_input_message")
        country.after(newDiv);
        check = false;
    }
    if (check === true) {
        country.classList.add("good_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "good_text_country");
        const newContent = document.createTextNode("Looks good!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("good_input_message")
        country.after(newDiv);
    }
    return check;
}

function validateZip(zipcode) {
    let val = zipcode.value;
    let check = true;
    if (zipcode.classList.contains("bad_input")) {
        zipcode.classList.remove("bad_input");
        Array.from(document.getElementsByClassName('error_text_zipcode')).forEach(element => {
            element.remove();
        });
    }
    if (zipcode.classList.contains("good_input")) {
        zipcode.classList.remove("good_input");
        const element = document.getElementById("good_text_zipcode");
        element.remove();
    }
    if (val.length != 6) {
        zipcode.classList.add("bad_input");
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode("Zip code must have 6 characters");
        newDiv.appendChild(newContent);
        newDiv.classList.add("bad_input_message");
        newDiv.classList.add("error_text_zipcode");
        zipcode.after(newDiv);
        check = false;
    }
    else if (!(val.charCodeAt(0) >= 48 && val.charCodeAt(0) <= 57 &
        val.charCodeAt(1) >= 48 && val.charCodeAt(1) <= 57 &
        val.charCodeAt(2) >= 48 && val.charCodeAt(2) <= 57 &
        val.charCodeAt(3) >= 48 && val.charCodeAt(3) <= 57 &
        val.charCodeAt(4) >= 65 && val.charCodeAt(4) <= 90 &
        val.charCodeAt(5) >= 65 && val.charCodeAt(5) <= 90)) {
        zipcode.classList.add("bad_input");
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode("Zip code must have 4 digits and 2 capital letters");
        newDiv.appendChild(newContent);
        newDiv.classList.add("bad_input_message");
        newDiv.classList.add("error_text_zipcode");
        zipcode.after(newDiv);
        check = false;
    }
    if (check === true) {
        zipcode.classList.add("good_input");
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "good_text_zipcode");
        const newContent = document.createTextNode("Looks good!");
        newDiv.appendChild(newContent);
        newDiv.classList.add("good_input_message");
        zipcode.after(newDiv);
    }
    return check;
}