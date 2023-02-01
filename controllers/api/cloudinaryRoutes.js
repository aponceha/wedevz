// const cloudinary = require('cloudinary').v2;
// const router = require("express").Router();

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure: true,
// })

// require("dotenv").config()
// const express = require("express")
// const fse = require("fs-extra");
// const { User } = require('../../models');
// const app = express()
// app.use(express.static("public"))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))



// function passwordProtected(req, res, next) {
//   res.set("WWW-Authenticate", "Basic realm='Cloudinary Front-end Upload'")
//   if (req.headers.authorization == "Basic YWRtaW46YWRtaW4=") {
//     next()
//   } else {
//     res.status(401).send("Try again")
//   }
// }

// router.use(passwordProtected)

// router.get("/", (req, res) => {
//   res.send(`<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>Welcome</h1>
//     <form id="upload-form">
//       <input id="file-field" type="file" />
//       <button>Upload</button>
//     </form>
//     <hr />
//     <a href="/view-photos">How would I use the public_id values that I store in my database?</a>
//     <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//     <script src="/client-side.js"></script>
//   </body>
// </html>`)
// })

// router.get("/get-signature", (req, res) => {
//   const timestamp = Math.round(new Date().getTime() / 1000)
//   const signature = cloudinary.utils.api_sign_request(
//     {
//       timestamp: timestamp
//     },
//     cloudinaryConfig.api_secret
//   )
//   res.json({ timestamp, signature })
// })

// // Route for updating cloudinary image link to User table
// router.put("/:id", (req, res) => {

//     User.update({
//         user_pic: req.body.public_id
//     },
//     {where: {
//         id: req.params.id,
//     }
//     }
//     )
// .then((updatedUser)=> {
//     res.json(updatedUser);
// })
// .catch((err)=> res.json(err))
//   }
// )

// router.get("/view-photos", async (req, res) => {
//   await fse.ensureFile("./data.txt")
//   const existingData = await fse.readFile("./data.txt", "utf8")
//   res.send(`<h1>Hello, here are a few photos...</h1>
//   <ul>
//   ${existingData
//     .split("\n")
//     .filter(item => item)
//     .map(id => {
//       return `<li><img src="https://res.cloudinary.com/${cloudinaryConfig.cloud_name}/image/upload/w_200,h_100,c_fill,q_100/${id}.jpg">
//       <form action="delete-photo" method="POST">
//         <input type="hidden" name="id" value="${id}" />
//         <button>Delete</button>
//       </form>
//       </li>
//       `
//     })
//     .join("")}
//   </ul>
//   <p><a href="/">Back to homepage</a></p>
//   `)
// })

// app.post("/delete-photo", async (req, res) => {
//   // do whatever you need to do in your database etc...
//   await fse.ensureFile("./data.txt")
//   const existingData = await fse.readFile("./data.txt", "utf8")
//   await fse.outputFile(
//     "./data.txt",
//     existingData
//       .split("\n")
//       .filter(id => id != req.body.id)
//       .join("\n")
//   )

//   // actually delete the photo from cloudinary
//   cloudinary.uploader.destroy(req.body.id)

//   res.redirect("/view-photos")
// })

const router = require("express").Router();
const fileUpload = require('express-fileupload');

router.use(fileUpload());

router.post('/upload', function(req, res) {
    let sampleFile;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/public/css/images/uploaded-images' + sampleFile.name;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).send(err);
  
      res.send('File uploaded!');
    });
  });

  module.exports = router;