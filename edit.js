const saveButton = document.querySelector(".button-save");
const cancelButton = document.querySelector(".button-cancel");

const userContainer = document.querySelector(".user-container");

const inputForm = document.querySelector(".user-input");
const firstNameInput = document.querySelector(".user-input__first-name");
const lastNameInput = document.querySelector(".user-input__last-name");
const officeLocationInput = document.querySelector(".user-input__office-location");

const checkUser = JSON.parse(window.localStorage.getItem("user"));

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let officeLocation = officeLocationInput.value;
    let user = {
        firstName: firstName == "" ? checkUser.firstName ? checkUser.firstName : "First Name" : firstName,
        lastName: lastName == "" ? checkUser.lastName ? checkUser.lastName : "Last Name" : lastName,
        officeLocation: officeLocation == "" ? checkUser.officeLocation ? checkUser.officeLocation : "Office Location" : officeLocation,
    };
    window.localStorage.removeItem("user");
    window.localStorage.setItem("user", JSON.stringify(user));
    userContainer.classList.add("user-container-animate");
    setTimeout(() => window.location.replace('my-profile.html'),450);
});

// saveButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     userContainer.classList.add("user-container-animate");
//     setTimeout(() => window.location.replace('my-profile.html'),450);
// });
cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    userContainer.classList.add("user-container-animate");
    setTimeout(() => window.location.replace("my-profile.html"), 450);
});