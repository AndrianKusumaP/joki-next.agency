// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

hamburger.onclick = (e) => {
  e.preventDefault(); // Mencegah default anchor behavior
  navbarNav.classList.toggle("active");
};

// Fitur dropdown untuk menu "Layanan Kami"
const dropdownToggles = document.querySelectorAll(
  ".menu-item-has-children > a"
);

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah default anchor behavior
    const submenu = this.nextElementSibling;
    if (submenu.style.maxHeight) {
      submenu.style.maxHeight = null;
    } else {
      closeAllSubmenus();
      submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
  });
});

function closeAllSubmenus() {
  const submenus = document.querySelectorAll(".sub-menu");
  submenus.forEach((submenu) => {
    submenu.style.maxHeight = null;
  });
}

// WhatsApp Button
document.getElementById("whatsappBtn").addEventListener("click", function () {
  var phoneNumber = "6282340136885";
  var message = "Halo, saya tertarik dengan layanan Anda.";
  var url =
    "https://api.whatsapp.com/send?phone=" +
    phoneNumber +
    "&text=" +
    encodeURIComponent(message);
  window.open(url, "_blank");
});
