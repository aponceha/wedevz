const User = require('../models/User');
const cloudinary = require('../utils/cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    secure: true
});




// const profile = await User.findOne({ where: { id: req.session.user_id } }
//     try {
//         const result = cloudinary.uploader.upload(image, {
//             folder: "userpic",
//         })
//         const userprofile = await User.create({
//             id,
//             first_name,
//             last_name,
//             dob,
//             city,
//             stateprovince,
//             user_pic: {
//                 public_id: result.public_id,
//                 url: result.secure_url,
//             }

//         })
//         res.status(200).json(userprofile);
//     } catch (err) {
//         console.log(err);
//         next(err);
//     }
    
