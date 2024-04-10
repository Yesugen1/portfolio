function sendMail() {
  let parms = {
    name: document.getElementById("nameHere").value,
    email: document.getElementById("emailHere").value,
    message: document.getElementById("messageHere").value,
  };
  emailjs
    .send("service_r41nfvj", "template_rxjll6f", parms)
    .then(alert("Email Sent"));
}
