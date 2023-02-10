// different tabs
const links = document.querySelectorAll(".tab-links");
const contents = document.querySelectorAll(".tab-contents");

function openTab(tabName) {
  //   links.forEach((link) => link.classList.remove("active-link"));
  //   contents.forEach((content) => content.classList.remove("active-tab"));

  //alternative of forEach

  for (const tablink of links) {
    tablink.classList.remove("active-link");
  }
  for (const tabcontent of contents) {
    tabcontent.classList.remove("active-tab");
  }

  // Get the active link element
  const activeLink = document.querySelector(`[onclick="openTab('${tabName}')"]`);

  //alternative way to get the active link element
  //   let elements = document.getElementsByTagName("*");
  //   let activeLink;
  //   for (let element of elements) {
  //     if (element.getAttribute("onclick") === `openTab('${tabName}')`) {
  //       activeLink = element;
  //       break;
  //     }
  //   }

  // Add class "active-link" to the active link element
  activeLink.classList.add("active-link");
  // Get the active tab content
  const activeTab = document.getElementById(tabName);
  // Add class "active-tab" to the active tab content
  activeTab.classList.add("active-tab");
}

//Interest tab
const learnMore = document.getElementById("learnMore");
const text = document.getElementById("restText");

learnMore.addEventListener("click", () => {
  const textSetting = text.style.display;
  if (textSetting === "block") {
    text.style.display = "none";
    learnMore.innerHTML = "Read more..";
  } else {
    text.style.display = "block";
    learnMore.innerHTML = "Read Less";
  }
});

// --------------------------sidebar----------

var sidebar = document.getElementById("sidemenu");

function openMenu() {
  sidebar.style.left = "0";
}

function closeMenu() {
  sidebar.style.left = "-100px";
}

// -------------------------------contact form--------------------------
const scriptURL = "https://script.google.com/macros/s/AKfycbzzjS8EHntmjA6fMOvMUu2-saOJM4j17-WVmzlvj7n7h2EddMTz19rDoeGRz-afoFyPow/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
