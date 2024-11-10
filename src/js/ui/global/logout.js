import { onLogout } from "../auth/logout.js";

export function setLogoutListener() {
   const logoutButton = document.getElementById("logoutBtn");
   logoutButton.addEventListener("click", () => {
      onLogout();
   })
}
