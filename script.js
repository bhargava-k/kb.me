function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var capsule1 = document.getElementById("capsule1");
    var capsule2 = document.getElementById("capsule2");
    var capsule3 = document.getElementById("capsule3");
    var strength = document.getElementById("password-strength");

    var lengthError = password.length < 8;
    var digitError = !/\d/.test(password);
    var uppercaseError = !/[A-Z]/.test(password);
    var lowercaseError = !/[a-z]/.test(password);
    var specialError = !/[!@#$%^&*()-+]/.test(password);

    if (lengthError) {
        capsule1.className = "capsule red";
        capsule2.className = "capsule";
        capsule3.className = "capsule";
        strength.innerHTML = "Password is weak";
    } else if (digitError || uppercaseError || lowercaseError || specialError) {
        capsule1.className = "capsule yellow";
        capsule2.className = "capsule yellow";
        capsule3.className = "capsule";
        strength.innerHTML = "Password is okay";
    } else {
        capsule1.className = "capsule green";
        capsule2.className = "capsule green";
        capsule3.className = "capsule green";
        strength.innerHTML = "Password is strong";
    }
}
