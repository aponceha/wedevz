console.log("test click");
const editProfileHandler = async (event) => {
  
  console.log("test");
    event.preventDefault();
    const fname = document.querySelector("#profile_fname").value.trim();
    const lname = document.querySelector("#profile_lname").value.trim();
    const description = document.querySelector("#profile_description").value.trim();
    const location = document.querySelector("#profile_location").value.trim();
    const employer = document.querySelector("#profile_employer").value.trim();
    // const user_pic = document.querySelector("#user_pic-signup").value.trim();
    const age = document.querySelector("#profile_age").value.trim();
    const user_technology = document.querySelector("#profile_technologies").value.trim();
    const education = document.querySelector("#profile_education").value.trim();
    const github = document.querySelector("#profile_github").value.trim();
    
    if (fname && lname && location && user_technology) {
          if (event.target.hasAttribute('data-id')) {
            const id = event.target.getAttribute('data-id');
            console.log("id: "+id)
          const response = await fetch(`/api/user/editprofile/${id}`, {
            method: "POST",
            body: JSON.stringify({ fname, lname, age, location, user_technology, education, employer, description,  github }),
            headers: { "Content-Type": "application/json" },
          });
      
          if (response.ok) {
            document.location.replace(`/editprofile/${id}`);
          } else {
            alert(response.statusText);
          }
        }
      }
  };

document
  .querySelector('#update-profile-form')
  .addEventListener('submit', editProfileHandler);