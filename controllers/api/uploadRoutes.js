const router = require("express").Router();


router.post('/', function(req, res) {
    let sampleFile;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath =  '/uploaded-images' + sampleFile.name;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).send(err);
  
      res.send('File uploaded!');
    });
  });


//  get the file from user and post it to the server. Save the file to the server in uploaded-images folder
// router.get('/', (req, res) => {
//     res.sendFile(__dirname, '/partials/login.handlebars')
// })

// router.post('/', (req, res) => {
//     if (req.files) {
//         console.log(req.files)
//         // var file = req.files.file
//         // var filename = file.name
//         // console.log(filename)
//     }
//         // file.mv('./uploads/', filename, function (err) {
//         //     if (err) {
//         //         console.log(err)
//         //         res.send('error occured')
//         //     } else {
//         //         res.send('done')
//         //     }
//         // })
//     })    
    
module.exports = router;

