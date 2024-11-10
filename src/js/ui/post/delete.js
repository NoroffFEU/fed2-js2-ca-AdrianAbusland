import { deletePost } from "../../api/post/delete.js";

export async function onDeletePost(postId) {
    
    if (!postId) {
        console.error("No post ID provided for deletion");
        alert("Cannot delete post: No post ID provided");
        return;
    }

    if (confirm("Are you sure you want to delete this post?")) {
        try {
            const result = await deletePost(postId);
            if (result) {
                // console.log('Post successfully deleted');
                alert('Post successfully deleted');
                // Redirect to home page
                window.location.href = `${window.location.origin}/fed2-js2-ca-AdrianAbusland/`;
            } else {
                throw new Error('Failed to delete post');
            }
        } catch (error) {
            console.error("Error in onDeletePost:", error);
            alert(`Failed to delete post: ${error.message}`);
        }
    }
}