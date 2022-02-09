const loginHandler = async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  console.log("user email and passowrd", email, password);

  //user has entered both fields
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("redirecting to profile");
      // If successful, redirect the browser to the profile page
      //   document.location.replace("./profile");
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById("loginForm").addEventListener("submit", loginHandler);
