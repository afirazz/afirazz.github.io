window.addEventListener("scroll", function () {
  const header = document.getElementsByTagName("header")[0];

  // If the page is scrolled down 50px or more, add the 'scrolled' class
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
