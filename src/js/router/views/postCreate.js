import { setLogoutListener } from "../../ui/global/logout.js";
import { onCreatePost } from "../../ui/post/create.js";
import { authGuard } from "../../utilities/authGuard.js";

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);

authGuard();

setLogoutListener()
