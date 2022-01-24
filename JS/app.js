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
});

// ============ MESSAGING ====================

const userName = document.querySelector("#search");
const message = document.querySelector("#message");
const send = document.querySelector(".send-btn");

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
const defaultValue = document.querySelector(".defaultValue");

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
    timeZone.value = defaultValue;
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
