const signUp = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const first_name = document.querySelector("#first_name-signup").value.trim();
  const last_name = document.querySelector("#last_name-signup").value.trim();
  const age = document.querySelector("#age-signup").value.trim();
  const location = document.querySelector("#location-signup").value.trim();
  const user_pic = document.querySelector("#user_pic-signup").value.trim();
  const user_technology = document
    .querySelector("#user_technology-signup")
    .value.trim();
  const education = document.querySelector("#education-signup").value.trim();
  const employer = document.querySelector("#employer-signup").value.trim();
  const github = document.querySelector("#github-signup").value.trim();

  if (email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        first_name,
        last_name,
        age,
        location,
        user_pic,
        user_technology,
        education,
        employer,
        github,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector(".signup-form").addEventListener("submit", signUp);
