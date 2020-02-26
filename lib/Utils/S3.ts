import aws from 'aws-sdk';
import access from '../../config/awsconfig.json';

export const handleUpload = async (e) => {
  const file = e.target.files[0];
  let url = null;
	const s3 = new aws.S3({
		accessKeyId: access.accessKeyId,
		secretAccessKey: access.secretAccessKey,
		region: access.region
	});

	const param = {
		Bucket: 'blog-oscar',
		Key: `blog/images/${file.name}`,
		ACL: 'public-read',
		Body: file,
		ContentType: 'image/png'
	};

	const dataUrl = await s3.upload(param, (err, data) => {
		if (err) {
			console.log('image upload err : ' + err);
			return;
    }
    return data.Location;
  });

  return dataUrl;
};
