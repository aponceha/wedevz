//  Function to POST a new project to the database
console.log("createproject.js loaded");
const createProjectFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const description = document.querySelector("#description").value.trim();
  const link = document.querySelector("#link").value.trim();
  const project_technology = document
    .querySelector("#project_technology")
    .value.trim();
  // let user_id = document.event.target.hasAttribute('data-id');
  console.log("name: " + name);
  console.log("description: " + description);
  console.log("link: " + link);
  console.log("project_technology: " + project_technology);
  let user_id = event.target.getAttribute("data-id");
  console.log("user_id: " + user_id);

  if (event.target.hasAttribute("data-id")) {
    user_id = event.target.getAttribute("data-id");
    console.log("id: " + user_id);
  }
  if (name && description && link && project_technology && user_id) {
    user_id = event.target.getAttribute("data-id");
    console.log("POST request sent");
    const response = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify({
        user_id,
        name,
        description,
        link,
        project_technology,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/profile/${user_id}`);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".add-project-form")
  .addEventListener("click", createProjectFormHandler);
