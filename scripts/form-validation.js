//Strict mode for JS
"use strict";
//Check if valid age for application
function nameCheck(){
    let result = true;
    const fname = document.getElementById("fname");
    const gname = document.getElementById("gname");
    const fnameValue = fname.value;
    const gnameValue = gname.value;
    if(fnameValue == "" || !fnameValue.match(/^[A-Za-z]+$/)){
        setError(fname,"Invalid Name");
        result = false;
    }
    else{
        setSuccess(fname);
    }
    if(gnameValue == "" || !gnameValue.match(/^[A-Za-z]+$/)){
        setError(gname,"Invalid Name");
        result = false;
    }
    else{
        setSuccess(gname);
    }
    return result;
}
function ageCheck(){
    let result = true;
    const dob = document.getElementById("dob")
    const dobValue = new Date(dob.value);
    const currentdate = new Date();
    const age = (currentdate.getFullYear() - dobValue.getFullYear())
    if(age < 15 || age > 80){
        result = false;
        setError(dob,"Must be between 15-80");
    }
    else{
        setSuccess(dob);
    }
    return result;
}
// Check If Valid Postcode for Selected State
function stateCheck(){
    let result = true;
    const stateEl = document.getElementById("state");
    const state = stateEl.value;
    const postcode = document.getElementById("postcode");
    switch (state){
        case "VIC":
            if (postcode.value[0] == 3 || postcode.value[0] == 8){setSuccess(postcode);break;}
            else {setError(postcode,'Wrong Postcode');result = false;break;}
        case "QLD":
            if (postcode.value[0] == 4 || postcode.value[0] == 9){setSuccess(postcode);break;}
            else {setError(postcode,"Wrong Postcode");result = false;break;}
        case "NSW":
            if (postcode.value[0] == 1 || postcode.value[0] == 2){setSuccess(postcode);break;}
            else {setError(postcode,"Wrong Postcode");result = false;break;}
        case "WA":
            if (postcode.value[0] == 6){setSuccess(postcode);break;}
            else {setError(postcode,"Wrong Postcode");result = false;break;}
        case "SA":
            if (postcode.value[0] == 5){setSuccess(postcode);break;}
            else {setError(postcode,"Wrong Postcode");result = false;break;}
        case "TAS":
            if (postcode.value[0] == 7){setSuccess(postcode);break;}
            else {setError(postcode,"Wrong Postcode");result = false;break;}
        case "NT":
            if (postcode.value[0] == 0){setSuccess(postcode);break;}
            else {setError(postcode,"Wrong Postcode");result = false;break;}
        case "ACT":
            if (postcode.value[0] == 0){setSuccess(postcode);break; }
            else {setError(postcode,'Wrong Postcode');result = false;break;} 
    }
    return result;
}
//Check Other Skills CheckBox
function otherSkillCheck(){
    let result = true;
    const isothers = document.getElementById("others").checked;
    const otherText = document.getElementById("other-skills");
    const otherTextArea = otherText.value;
    if (isothers){
        if (otherTextArea == ""){
            setError(otherText,"Mention Your Skills");
            result = false;
        }
        else{
            setSuccess(otherText);
        }
    }
    return result;
}
//Check Address Format
function addressCheck(){
    let result = true;
    const street = document.getElementById("street-address");
    const streetValue = street.value;
    const suburb = document.getElementById("suburb-town");
    const suburbValue = suburb.value;
    if(!streetValue.match(/^[A-Za-z0-9/s]+$/) || streetValue == ""){
        setError(street,"Invalid Street Address");
        result = false;
    }
    else{
        setSuccess(street);
    }
    if(!suburbValue.match(/^[A-Za-z-/s]+$/) || suburbValue == ""){
        setError(suburb,"Invalid Town/Suburb");
        result = false;
    }
    else{
        setSuccess(suburb);
    }
    return result;
}
function contactCheck(){
    let result = true;
    const email = document.getElementById("email");
    const emailValue = email.value;
    const phone = document.getElementById("phone");
    const phoneValue = phone.value;

    if(phoneValue.match[/^[0-9/s]+$/] || phoneValue == ""){
        setError(phone, "Phone Number Invalid");
        result = false;
    }
    else{
        setSuccess(phone);
    }
    if(!isEmail(emailValue) || emailValue==""){
        setError(email, "Invalid Email Format");
        result = false;
    }
    else{
        setSuccess(email);
    }
    return result;
}
//Email Regex
function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-ZzA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Set Success Styling 
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = ('form-control success');
    const small = formControl.querySelector("small");
    small.innerText = "";
}
// Set Error Styling and Message
function setError(input,msg){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = ('form-control error');
    small.innerText = msg;
}
// Save Form Info in Session Storage
function saveForm(){
    const fname = document.getElementById("fname").value;
    const gname = document.getElementById("gname").value;
    sessionStorage.setItem("fname",fname);
    sessionStorage.setItem("gname",gname);

    const street = document.getElementById("street-address").value;
    const suburb = document.getElementById("suburb-town").value;
    sessionStorage.setItem("street",street);
    sessionStorage.setItem("suburb",suburb);

    const dob = document.getElementById("dob").value;
    const state = document.getElementById("state").value;
    const postcode = document.getElementById("postcode").value;
    sessionStorage.setItem("dob",dob);
    sessionStorage.setItem("state",state);
    sessionStorage.setItem("postcode",postcode);
    
    let gender = "";
    if(document.getElementById("male").checked){gender="male";}
    else if (document.getElementById("female").checked){gender="female";}
    sessionStorage.setItem("gender",gender);

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    sessionStorage.setItem("email",email);
    sessionStorage.setItem("phone",phone);

    let skills = [];
    if(document.getElementById("programming").checked){skills.push("programming");}
    if(document.getElementById("linux").checked){skills.push("linux");}
    if(document.getElementById("networking").checked){skills.push("networking");}
    if(document.getElementById("communication").checked){skills.push("communication");}
    if(document.getElementById("others").checked){
        skills.push("others");
        const otherText = document.getElementById("other-skills").value;
        sessionStorage.setItem("others-description",otherText);
    }
    console.log(skills);
    sessionStorage.setItem("skills",JSON.stringify(skills));
}
// Fill Form from Session Storage
function fillForm(){
    const fname = sessionStorage.getItem("fname");
    const gname = sessionStorage.getItem("gname");
    const street = sessionStorage.getItem("street");
    const suburb = sessionStorage.getItem("suburb");
    const dob = sessionStorage.getItem("dob");
    const state = sessionStorage.getItem("state");
    const postcode = sessionStorage.getItem("postcode");
    const gender = sessionStorage.getItem("gender");
    const email = sessionStorage.getItem("email");
    const phone = sessionStorage.getItem("phone");
    const skills = JSON.parse(sessionStorage.getItem("skills"));
    const otherText = sessionStorage.getItem("others-description");
    document.getElementById("fname").value = fname;
    document.getElementById("gname").value = gname;
    document.getElementById("dob").value = dob;
    document.getElementById("state").value = state;
    document.getElementById("suburb-town").value = suburb;
    document.getElementById("street-address").value = street;
    document.getElementById("postcode").value = postcode;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;
    if(gender=="male"){document.getElementById("male").checked};
    if(gender=="female"){document.getElementById("female").checked};
    if(skills){
        document.getElementById("programming").checked = (skills.indexOf("programming") != -1);
        document.getElementById("linux").checked = (skills.indexOf("linux") != -1);
        document.getElementById("networking").checked = (skills.indexOf("networking") != -1);
        document.getElementById("communication").checked = (skills.indexOf("communication") != -1);
        document.getElementById("others").checked = (skills.indexOf("others") != -1);
        document.getElementById("other-skills").value = otherText;
    }
}
//Validate Form Information
function formValidate(){
    let nameCheckResult = nameCheck();
    let ageCheckResult = ageCheck();
    let stateCheckResult = stateCheck();
    let otherSkillResult = otherSkillCheck();
    let addressCheckResult = addressCheck();
    let contactCheckResult = contactCheck();
    console.log(addressCheckResult);
    // Check if any Validation returned error
    console.log(nameCheckResult,ageCheckResult,stateCheckResult,otherSkillResult,contactCheckResult);
    if(nameCheckResult && ageCheckResult && stateCheckResult && addressCheckResult && contactCheckResult){
        return true;
    }
    else {
        return false;
    }
}
//Initial Function to run on window load
function validate(){
    const applyBody = document.getElementById("applybody");
    if(applyBody){
        // Pre-Fill Form 
        fillForm();
        const form = document.getElementById("apply-form");
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            formValidate();
            saveForm();
            // Submit Form when no errors
            if(formValidate() === true){
                form.submit();
            }
            // Prevent Submission when error
            else if (formValidate() === false){
                e.preventDefault();
            }
        });
    }
}

window.addEventListener("load",validate());