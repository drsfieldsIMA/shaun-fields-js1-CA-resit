// Question 5
// When the form on this page is submitted, write code to validate the inputs with the following rules:
// - firstName - required
// - lastName - must have a value with a minimum length of 3
// - email - must have a value and be formatted like an email address
// - subject - must have a value with a minimum length of 7
// - message - must have a value with a minimum length of 15
// If any of the inputs fail validation, display the relevant error message.

const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;
    let firstinput="first name";
    checkerror(firstNameError, firstNameValue, 1,firstinput)
    
    const secondName = document.querySelector("#secondName");
    const secondNameError = document.querySelector("#secondNameError");
    const secondNameValue = secondName.value;
    let secondinput="second name";
    checkerror(secondNameError, secondNameValue, 3,secondinput)


    const subjectName = document.querySelector("#subjectName");
    const subjectError = document.querySelector("#subjectError");
    const subjectValue = subject.value;
    let thirdinput="subject";
    checkerror(subjectError, subjectValue, 7,thirdinput)
         

    const emailText= document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const emailValue = emailText.value;
    let fifthinput= "email address"
    findtheAt(emailValue,emailError)
                

    const messageText= document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = messageText.value;
    let fourthinput="message";
    checkerror(messageError, messageValue, 15,fourthinput)

}

function checkerror(XError, Xvalue, tol, inpt) {
    let str=`${tol}`;
    let name= inpt;
// if the value's length is greater than tol return true
        if (checkInputLength(Xvalue, tol) === true) {
            XError.style.display = "none";
// else diplay the appriopriate error message try to be specific as possible
        } else {
            XError.style.display = "block";
                if (tol===1){
                     XError.textContent ="Your first name is required";
                }
                else{ 
                    XError.textContent ="Your "+ name + " was not greater than "+ str + " characters";
                }
        }
}

function checkInputLength(value, tol) {
    // trim the value
    const trimmedValue = value.trim();
            // if the value's length is greater than tol return true
        if (trimmedValue.length > tol) {
            return true;
        } 
        // else return flase and display the erro message
        else {
            return false;
        }
}


function findtheAt(Address,XError) {
    var n = Address.indexOf("@", 1);
        if (n >= 1) {
            XError.style.display = "none";
                        if (checkInputLength(Address, 2) === false){
                            XError.style.display = "block";
                            XError.textContent ="Your email address was not greater than 2 characters";
                        }
        } else {
            XError.style.display = "block";
            XError.textContent ="Oops your email is not valid it does not have a @";
        }
  }
