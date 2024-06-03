function validateForm() {
  let name = document.forms["form"]["name"].value;
  let email = document.forms["form"]["email"].value;
  let message = document.forms["form"]["message"].value;
  let i;
  for (i = 0; i < email.length; i++) {
    if (!email.includes("@", 0)) {
      alert("Please enter a valid email");
      return false;
    }
  }
  alert("Name: " + name);
  alert("Email: " + email);
  alert("Message: " + message);
  alert("Form submitted Thanks");
}
