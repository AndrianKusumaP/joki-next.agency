//Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');

//ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
}

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Format pesan email
  var emailBody = "Nama: " + name + "\n" +
                  "No HP: " + phone + "\n" +
                  "Email: " + email + "\n\n" +
                  "Pesan: " + message;
  
  // Buat link mailto
  var mailtoLink = "mailto:sutani2969@gmail.com" + 
                   "?subject=Pesan%20dari%20Formulir%20Kontak" + 
                   "&body=" + encodeURIComponent(emailBody);
  
  // Buka klien email default dengan link mailto
  window.location.href = mailtoLink;
});