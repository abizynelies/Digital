// form submission
document.getElementById("lead-form")
.addEventListener("submit",function(e) {
    e.preventDefault();

    // Get form values
 const firstname = this.elements[0].value;
 const lastname = this.elements[1].value;
 const email = this.elements[2].value;
 const course = this.elements[3].value;

 // in real scenario, you would send this data to a server
 console.log("Lead Captured: ", {firstname,lastname,email,course});

 // show configuration
  alert("Thank you for your interest! We will  contact you shortly with our course details.")

// Reset form
this.reset()

})


// show popup after 5 seconds
setTimeout(function(){
document.getElementById("mc_embed_shell").style.display="flex"
},5000);

// close popup when X is clicked
document.querySelector(".close-btn").addEventListener("click",function(){
document.getElementById("mc_embed_shell").style.display="none";
})

// close when clicking outside content
document.getElementById("mc_embed_shell").addEventListener("click",function(e){
 if(e.target=== this){
  this.style.display="none";
 }
});


// =======================> Cookies <=============================


const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-btn");
const declineBtn = document.getElementById("decline-btn");

// Check if user already made a choice
const consent = localStorage.getItem("cookieConsent");

if (consent === "accepted") {
  banner.style.display = "none";
  loadAnalytics(); // Load analytics only if accepted
} else if (consent === "declined") {
  banner.style.display = "none";
}

// Accept cookies
acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  banner.style.display = "none";
  loadAnalytics(); // IMPORTANT
});

// Decline cookies
declineBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "declined");
  banner.style.display = "none";
});

// on page load, check past choice

window.onload = function () {
  
  if(localStorage.getItem("cookiesAccepted")==="true"){
    loadAnalytics(); 
    document.getElementById("cookie-banner").style.display="none";
      
  }else if (localStorage.getItem("cookiesAccepted")==="false"){
    document.getElementById("cookie-banner").style.display="none";
  }
}


