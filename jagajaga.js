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
    if (validateFname(fname)) {
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
            const newContent = document.createTextNode("First name must not be fgggggggggggggggggggggggggggempty!");
            newDiv.appendChild(newContent);
            newDiv.classList.add("bad_input_message")
            fname.after(newDiv);
        }
        check = false;
    }
    else {
        // for (let i = 0; i < val.length; i++) {
        //     console.log(val.charCodeAt(i));
        // }
        // alert(`You have inputted: ${val}`);
    }
    return check;
}