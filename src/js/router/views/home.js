import { displayPosts } from "../../api/post/postsStructure.js";
import { readPosts } from "../../api/post/read.js";
import { setLogoutListener } from "../../ui/global/logout.js";
import { authGuard } from "../../utilities/authGuard.js";

async function runPage() {
    const posts = await readPosts()
    displayPosts(posts)
}

runPage();

setLogoutListener();

authGuard();