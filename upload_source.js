const qiniu = require('qiniu'),
      { keys, bucket, files } = require('./configs/qiniu');

qiniu.conf.ACCESS_KEY = keys.ak;
qiniu.conf.SECRET_KEY = keys.sk;      

;(() => {
  
  function uploadToken(bucket, key){
    var policy = new qiniu.rs.PutPolicy({
      isPrefixalScope: 1, 
      scope: bucket + ':' + key
    });
    return policy.uploadToken();
  }

  const config = new qiniu.conf.Config(),
        putExtra = new qiniu.form_up.PutExtra(),
        formUploader = new qiniu.form_up.FormUploader();

  files.map(async (file) => {
    const upToken = uploadToken(bucket.name, file.name);

    try {
      formUploader.putFile(upToken, file.name, file.path, putExtra, (err, data) => {
        if(err){
          console.log('Failed to upload data.(101)');
          console.log(err);
          return;
        }
      })  
    } catch (err) {
      console.log('Failed to upload data.(102)');
      console.log(err);
    }
  })      
})();