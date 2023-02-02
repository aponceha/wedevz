<<<<<<< HEAD

// // 
// const api_key = "your-api-key-here"
// const cloud_name = "your-cloud-name-here"
// // It's okay for these to be public on client-side JS
// // You just don't ever want to leak your API Secret

// document.querySelector("#upload-form").addEventListener("submit", async function (e) {
//   e.preventDefault()

//   // get signature. In reality you could store this in localstorage or some other cache mechanism, it's good for 1 hour
//   const signatureResponse = await axios.get("/get-signature")

//   const data = new FormData()
//   data.append("file", document.querySelector("#file-field").files[0])
//   data.append("api_key", api_key)
//   data.append("signature", signatureResponse.data.signature)
//   data.append("timestamp", signatureResponse.data.timestamp)

//   const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
//     headers: { "Content-Type": "multipart/form-data" },
//     onUploadProgress: function (e) {
//       console.log(e.loaded / e.total)
//     }
//   })
//   console.log(cloudinaryResponse.data)
//     // send the image info back to our server
//     const photoData = {
//         public_id: cloudinaryResponse.data.public_id,
//         version: cloudinaryResponse.data.version,
//         signature: cloudinaryResponse.data.signature
//       }
    
//       axios.post("/do-something-with-photo", photoData)
//     })
//     // 
=======
const signUp = async (event) => {
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
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ fname, lname, age, location, user_technology, education, employer, description,  github }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/explore");
      } else {
        alert(response.statusText);
      }
    }
  };
>>>>>>> d05855ce8db73813bf754eac0618a63c5f5e41fd
