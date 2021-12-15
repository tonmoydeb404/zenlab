// navbar variables
const navbarToggle = document.getElementById("navbar_toggle");
const navbarLinks = document.getElementById("navbar_links");

// toggle nav function
const toggleNav = () => {
  if (navbarToggle.classList.toggle("active")) {
    setTimeout(() => {
      navbarLinks.classList.add("flex");
    }, 500);
  } else {
    navbarLinks.classList.remove("flex");
  }
};

// toggle nav on navbarToggle button click
navbarToggle.onclick = () => toggleNav();
// toggle nav on navbar link click
[...navbarLinks.querySelectorAll("a")].forEach((navLink) => {
  navLink.onclick = () => {
    if (navbarToggle.display !== "none") {
      toggleNav();
      console.log("object");
    } else {
      return;
    }
  };
});

// slider variables
const slider = document.getElementById("testimonial_slider");
const sliderNav = document.getElementById("testimonial_nav");
const sliderNavButtons = sliderNav.querySelectorAll("button");

// enable function for slider navigation
[...sliderNavButtons].forEach((btn, index, arr) => {
    btn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')){
            return;
        }else{            
            // get previous active session
            const activeButton = [...arr].find((navOption) => navOption.classList.contains('active'));

            // remove previous session
            if(activeButton) activeButton.classList.remove('active');

            // indicate current active session
            e.target.classList.add('active')

            // calculate the slide postion
            const position = (100 / sliderNav.children.length) * index;

            // translate to the postion
            slider.style.transform = `translateX(-${position}%)`
        }
    })
})
