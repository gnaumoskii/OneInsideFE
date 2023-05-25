const editButton = document.querySelector(".user-edit");

const userContainer = document.querySelector(".user-container");

const firstNameText = document.querySelector(".user-info__first-name");
const lastNameText = document.querySelector(".user-info__last-name");
const officeLocationText = document.querySelector(".user-info__office-location");

userContainer.classList.remove("user-container-animate");

let user = JSON.parse(window.localStorage.getItem("user"));

if (user) {
    firstNameText.textContent = user.firstName;
    lastNameText.textContent = user.lastName;
    officeLocationText.textContent = user.officeLocation;
} else {
    firstNameText.textContent = "First Name";
    lastNameText.textContent = "Last Name";
    officeLocationText.textContent = "Office Location";
}



editButton.addEventListener("click", (event) => {
    event.preventDefault();
    userContainer.classList.add("user-container-animate");
    setTimeout(() => window.location.replace("edit-my-profile.html"), 450);
});

