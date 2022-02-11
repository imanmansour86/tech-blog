//add a new blog
const newBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("blog-title").value.trim();
  const description = document.getElementById("blog-description").value.trim();

  if (title && description) {
    const response = await fetch(`/api/blogs`, {
      method: "POST",
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

//delete a  blog
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/blog");
    } else {
      alert("Failed to delete project");
    }
  }
};

document.getElementById("new-blog").addEventListener("submit", newBlogHandler);

document
  .getElementById("delete-post")
  .addEventListener("click", delButtonHandler);
