const signUp = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    const location = document.querySelector("#location-signup").value.trim();
    const employer = document.querySelector("#employee-signup").value.trim();
    // const user_pic = document.querySelector("#user_pic-signup").value.trim();
    const age = document.querySelector("#age-signup").value.trim();
    const user_technology = document
      .querySelector("#user_technology-signup")
      .value.trim();
    const education = document.querySelector("#education-signup").value.trim();
    const github = document.querySelector("#github-signup").value.trim();
  
    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
          location,
          employer,
          age,
          user_technology,
          education,
          github,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/explore");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector(".signup-form").addEventListener("submit", signUp);