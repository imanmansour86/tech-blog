//add a new comment
const commentHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.getElementById("commentText").value.trim();
  const blog_id = parseInt(event.target.getAttribute("data-blog-id"));

  if (comment_text) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment_text, blog_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/blog/${blog_id}`);
    } else {
      alert("Failed to create new comment");
    }
  }
};

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

const showComment = () => {
  document.getElementById("new-comment").style.display = "block";
};
document
  .getElementById("delete-post")
  .addEventListener("click", delButtonHandler);

document
  .getElementById("new-comment")
  .addEventListener("submit", commentHandler);

document.getElementById("comment-btn").addEventListener("click", showComment);
