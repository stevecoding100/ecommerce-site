const form = document.getElementById("form");
const name = document.getElementById("Name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const country = document.getElementById("country");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const billing = document.getElementById("billing");
const otherBilling = document.getElementById("other-billing");
const ccName = document.getElementById("cc-name");
const ccLast = document.getElementById("cc-last");
const ccNumber = document.getElementById("cc-number");
const ccExpiration = document.getElementById("cc-expiration");
const ccVV = document.getElementById("cc-vv");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Preventing from submitting

  validateForm(); // validate form function
});

// Add error message to form
function setError(element, errorMessage) {
  const parent = element.parentElement;
  const message = parent.querySelector("small");
  message.setAttribute("id", "error");
  message.innerText = errorMessage;
}

//  Removes form error messages
function removeError(element) {
  const parent = element.parentElement;
  const message = parent.querySelector("small");
  message.removeAttribute("id", "error");
  message.innerText = "";
}

// Defining a function to validate form

function validateForm() {
  if (name.value.trim() === "") {
    setError(name, "name is required");
  } else {
    removeError(name);
  }
  if (lastName.value.trim() === "") {
    setError(lastName, "last name required");
  } else {
    removeError(lastName);
  }
  if (email.value.trim() === "") {
    setError(email, "enter a valid email");
  } else {
    removeError(email);
  }

  if (phone.value.trim() === "") {
    setError(phone, "enter phone number");
  } else {
    removeError(phone);
  }

  if (address.value.trim() === "") {
    setError(address, "enter a valid address");
  } else {
    removeError(address);
  }

  if (country.value.trim() === "") {
    setError(country, "select a country");
  } else {
    removeError(country);
  }
  if (city.value.trim() === "") {
    setError(city, "select a city");
  } else {
    removeError(city);
  }
  if (zip.value.trim() === "") {
    setError(zip, "enter a zip code");
  } else {
    removeError(zip);
  }

  if (ccName.value.trim() === "") {
    setError(ccName, "enter name on card");
  } else {
    removeError(ccName);
  }
  if (ccLast.value.trim() === "") {
    setError(ccLast, "enter last name on card");
  } else {
    removeError(ccLast);
  }

  if (ccNumber.value.trim() === "") {
    setError(ccNumber, "enter card number");
  } else {
    removeError(ccNumber);
  }
  if (ccExpiration.value.trim() === "") {
    setError(ccExpiration, "enter expiration date");
  } else {
    removeError(ccExpiration);
  }
  if (ccVV.value.trim() === "") {
    setError(ccVV, "enter CVV number");
  } else {
    removeError(ccVV);
  }
}
