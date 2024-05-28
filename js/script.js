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

hamburger.onclick = (e) => {
  e.preventDefault(); // Mencegah default anchor behavior
  navbarNav.classList.toggle('active');
}

// WhatsApp Button
document.getElementById('whatsappBtn').addEventListener('click', function() {
  var phoneNumber = '6282340136885';
  var message = 'Halo, saya tertarik dengan layanan Anda.';
  var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
  window.open(url, '_blank');
});