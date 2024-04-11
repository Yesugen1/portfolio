function sendMail() {
  // Get input values
  let name = document.getElementById("nameHere").value;
  let email = document.getElementById("emailHere").value;
  let message = document.getElementById("messageHere").value;

  // Check if all input fields are filled
  if (name && email && message) {
    // If all fields are filled, proceed to send the email
    let parms = {
      name: name,
      email: email,
      message: message,
    };
    emailjs
      .send("service_r41nfvj", "template_rxjll6f", parms)
      .then(function () {
        alert("Email Sent");
      })
      .catch(function (error) {
        console.error("Error sending email: ", error);
      });
  } else {
    // If any field is empty, show an alert to the user
    alert("Please fill in all fields before sending the email.");
  }
}
