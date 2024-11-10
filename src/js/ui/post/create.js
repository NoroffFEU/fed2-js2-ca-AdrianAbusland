import { createPost } from "../../api/post/create.js";

export async function onCreatePost(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const createData = {
        title: formData.get("title"),
        body: formData.get("body"),
        tags: formData.get("tags") ? formData.get("tags").split(',').map(tag => tag.trim()) : [],
        media: formData.get("image") ? {
            url: formData.get("image"),
            alt: formData.get("alt") || ''
        } : null
    };

    console.log("Form data:", createData);

    try {
        const result = await createPost(createData);
        // console.log("Post creation result:", result);
        // alert('Post created successfully!');
        form.reset();

        window.location.href = `${window.location.origin}/fed2-js2-ca-AdrianAbusland/`;
    } catch (error) {
        console.error("Error in onCreatePost:", error);
        alert(`Failed to create post: ${error.message}`);
    }
}