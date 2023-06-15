function switchNavAutomatically() {
  const navLinks = document.querySelectorAll(".nav-service-link");
  let currentIndex = 0;
  const interval = setInterval(() => {
    navLinks[currentIndex].click();
    currentIndex++;
    if (currentIndex >= navLinks.length) {
      currentIndex = 0;
    }
  }, 3000); // Change item every 2 seconds (adjust as needed)
}

switchNavAutomatically(); // Start automatic switching
