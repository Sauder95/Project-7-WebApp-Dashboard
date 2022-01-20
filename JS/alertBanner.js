const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = `
<div class= "alert-banner">
    <p><strong>Alert:</strong> You have unread messages</p><p class="alert-close">x</p></>
    </div>
`;

alertBanner.addEventListener("click", (e) => {
  if (e.target.classList.contains("alert-close")) {
    alertBanner.style.display = "none";
  }
});
