
const cloudinary = require('cloudinary');
import Image from '../../assets/screen-comp.jpg';

cloudinary.config({ 
  cloud_name: 'citysecrets', 
  api_key: '828954592983977', 
  api_secret: '72YbTgpQtNJWwtOodrtEBUDD_Ik' 
});

function testUpload() {
  cloudinary.v2.uploader.upload({ Image }, 
    function(error, result) {console.log(result, error);
    });
}
 
export default testUpload;