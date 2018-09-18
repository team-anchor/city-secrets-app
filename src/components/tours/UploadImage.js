require('dotenv').config();
const cloudinary = require('cloudinary');
import Image from '../../assets/screen-comp.jpg';
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({ 
  cloud_name: CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET 
});

function testUpload() {
  cloudinary.v2.uploader.upload({ Image }, 
    function(error, result) {console.log(result, error);
    });
}
 
export default testUpload;