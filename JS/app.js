const alertBanner = document.getElementById("alert");
const bell = document.querySelector(".bell");
const alertBubble = document.querySelector(".notification-bubble");

//  ===========  BANNER  =============

alertBanner.innerHTML = `
<div class= "alert-banner">
    <p><strong>Alert:</strong> You have unread messages</p><p class="alert-close">x</p></>
    </div>
`;

alertBanner.addEventListener("click", e => {
  if (e.target.classList.contains("alert-close")) {
    alertBanner.style.display = "none";
  }
});

// ==============  NOTIFICATION BUBBLE  =============

bell.addEventListener("click", () => {
  alertBubble.classList.add("hide");

  popUp();
});

// ============ DROP DOWN NOTIFICATIONS============\
const list = document.querySelector(".pop-up-list");

function popUp() {
  list.classList.toggle("hide");
  if ((list.innerHTML = " ")) {
    list.innerHTML = `
<li>
     <p><strong>Victoria:</strong> Hey hows it going?</p><p class="alert-close">x</p></li>
<li>
     <p><strong>Dale:</strong> Sorry i missed your last message.</p></div><p class="alert-close">x</p></li>
  `;
  } else {
    list.innerHTML = " ";
  }
}
list.addEventListener("click", e => {
  if (e.target.classList.contains("alert-close")) {
    e.target.parentNode.remove();
  }
});

// ============ MESSAGING ====================
// let students = ["victoria chambers", "dale byrd", "dawn wood", "dan oliver"];
const userName = document.querySelector("#search");
const message = document.querySelector("#message");
const send = document.querySelector(".send-btn");

// import autoComplete from "@tarekraafat/autocomplete.js";

const autoCompleteJS = new autoComplete({
  placeHolder: "Search for user...",
  data: {
    src: ["victoria chambers", "dale byrd", "dawn wood", "dan oliver"],
    cache: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: event => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
});

send.addEventListener("click", () => {
  if ((userName.value === "") | (message.value === "")) {
    alert("Please fill out the user name and message fields.");
  } else {
    alert("Message has been sent to " + userName.value);
  }
});

// ============= LOCAL STORAGE ==========================

const email = document.querySelector(".email-toggle");
const public = document.querySelector(".profile-toggle");
const timeZone = document.querySelector("#timeZone");
const saveCancel = document.querySelector(".save-cancel-wrap");

recallStorage();

saveCancel.addEventListener("click", e => {
  if (e.target.textContent === "SAVE") {
    sessionStorage.setItem("email", email.checked);
    sessionStorage.setItem("public", public.checked);
    sessionStorage.setItem("timezone", timeZone.value);
  } else {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("public");
    sessionStorage.removeItem("timezone");
    email.checked = false;
    public.checked = false;
    timeZone.selectedIndex = 0;
  }
});

function recallStorage() {
  if (sessionStorage.email === "true") {
    email.checked = true;
  } else {
    email.checked = false;
  }
  if (sessionStorage.public === "true") {
    public.checked = true;
  } else {
    public.checked = false;
  }
  if (sessionStorage.timezone) {
    timeZone.value = sessionStorage.timezone;
  }
}
