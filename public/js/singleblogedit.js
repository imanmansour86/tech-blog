//delete a  blog
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete project");
    }
  }
};

const editBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("blog-title").value.trim();
  const description = document.getElementById("blog-description").value.trim();
  const id = event.target.getAttribute("data-id");

  if (title && description) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create new blog");
    }
  }
};

document
  .getElementById("delete-post")
  .addEventListener("click", delButtonHandler);

document
  .getElementById("update-post")
  .addEventListener("click", editBlogHandler);
