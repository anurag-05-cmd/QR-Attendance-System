// Server Side
document.addEventListener('DOMContentLoaded', () => {
    preventInspectAndReload();
});
function preventInspectAndReload() {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault(); 
    });
    document.onkeydown = function(e) {
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    };
    
    window.onbeforeunload = function () {
        return "Are you sure you want to leave this page?"; 
    };
}
const users = [
    {email:"youremail",name:"Your Name ",enrollmentNo:1234,section:"X",rollNo:99,contactNo:1234567890,password:"yourpass",id:"yourid"},
]
  
  const loginForm = document.getElementById("login-form")
  const dashboard = document.getElementById("dashboard")
  const authForm = document.getElementById("auth-form")
  const themeToggle = document.getElementById("theme-toggle")
  
  authForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const userId = document.getElementById("user-id").value
    const password = document.getElementById("password").value
  
    const user = users.find((u) => u.id === userId && u.password === password)
  
    if (user) {
      showDashboard(user)
    } else {
      alert("Invalid user ID or password")
    }
  })
  
  function showDashboard(user) {
    document.querySelector(".team-picture").style.display = "none"
    loginForm.style.display = "none"
    dashboard.style.display = "block"
  
    document.getElementById("user-name").textContent = user.name
    document.getElementById("enrollment-no").textContent = user.enrollmentNo
    document.getElementById("section").textContent = user.section
    document.getElementById("roll-no").textContent = user.rollNo
    document.getElementById("email-id").textContent = user.email
    document.getElementById("contact-no").textContent = user.contactNo
  
    generateQRCode(user.id)
  }
  
  function generateQRCode(userId) {
    const qr = qrcode(0, "M")
    qr.addData(userId)
    qr.make()
  
    const qrImage = qr.createImgTag(10)
    document.getElementById("qr-code").innerHTML = qrImage
  }
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    updateThemeToggle()
    saveThemePreference()
  })
  
  function updateThemeToggle() {
    const isDarkMode = document.body.classList.contains("dark-mode")
    themeToggle.setAttribute("aria-label", isDarkMode ? "Switch to light mode" : "Switch to dark mode")
  }
  
  function saveThemePreference() {
    const isDarkMode = document.body.classList.contains("dark-mode")
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }
  
  // Check for saved theme preference or set based on user's system preference
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.body.classList.add("dark-mode")
  }
  
  // Update toggle button state on page load
  updateThemeToggle()
  
  
