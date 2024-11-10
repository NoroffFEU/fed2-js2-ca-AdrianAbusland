import { onRegister } from "../../ui/auth/register.js";
import { setLogoutListener } from "../../ui/global/logout.js";

const form = document.forms.register;

form.addEventListener("submit", onRegister);

setLogoutListener()
