import AWS from 'aws-sdk';

var albumBucketName = 'blog-oscar';
var bucketRegion = 'ap-northeast-2';
var IdentityPoolId = 'ap-northeast-2:df63c109-29c3-46e1-8598-a4693415589d';

AWS.config.region = 'ap-northeast-2'; // 리전
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-2:df63c109-29c3-46e1-8598-a4693415589d',
});
AWS.config.update({
	region: bucketRegion,
	credentials: new AWS.CognitoIdentityCredentials({
		IdentityPoolId: IdentityPoolId
	})
});

const s3 = new AWS.S3({
	apiVersion: '2006-03-01',
	params: { Bucket: albumBucketName }
});
export const handleUpload = async (e) => {
	const file = e.target.files[0];
	let url = null;

	const param = {
		Bucket: 'blog-oscar',
		Key: `blog-oscar/images/${file.name}`,
		ACL: 'public-read',
		Body: file,
		ContentType: 'image/png'
	};

	console.log(s3);
	console.log(param);
	const dataUrl = await s3.upload(param, (err, data) => {
		if (err) {
			console.log('image upload err : ' + err);
			return;
		}
		return data.Location;
	});

	return dataUrl;
};

export function addPhoto(e) {
	const file = e.target.files[0];
	const param = {
		Bucket: 'blog-oscar',
		Key: `blog-oscar/images/${file.name}`,
		ACL: 'public-read',
		Body: file,
		ContentType: 'image/png'
	};
	console.log(param);
	const result = s3.upload(param,
		function(err, data) {
			if (err) {
				console.log(err);
				return alert('There was an error uploading your photo: ' + err);
			}
			alert('Successfully uploaded photo.');
			return data.Location;
		}
	);
	return result
}
