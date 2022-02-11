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

const showComment = () => {
  document.getElementById("new-comment").style.display = "block";
};

document
  .getElementById("new-comment")
  .addEventListener("submit", commentHandler);

document.getElementById("comment-btn").addEventListener("click", showComment);
